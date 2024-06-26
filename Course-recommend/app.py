import streamlit as st
import streamlit.components.v1 as stc

from flask import Flask, jsonify
from flask_cors import CORS

import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity, linear_kernel

app = Flask(__name__)
CORS(app)

@app.route("/api/get_recommendations")
# def get_recommendations():
#     recommendations = ["AI and machine learning Course", "Python Course", "Javascript 3"]
#     return jsonify({"recommendations": recommendations})

# Load Dataset
def load_data(data):
    df = pd.read_csv(data)
    # Convert all text columns to lowercase
    df = df.applymap(lambda x: x.lower() if isinstance(x, str) else x)
    return df

# Similarity data Vecorizing
def vectorize_text(data):
    count_vect = CountVectorizer()
    cv_mat = count_vect.fit_transform(data)
    # Get the cosine
    cosine_sim = cosine_similarity(cv_mat)
    return cosine_sim

# recommendation Logic
def get_recommendation(title, cosine_sim, df,number_of_records = 5):
    course_indices = pd.Series(df.index, index=df['course_title']).drop_duplicates()
    #index of the course
    idx = course_indices[title]
    #cosine matrix of the index
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    selected_course_indices = [i[0] for i in sim_scores[1:]]
    selected_course_scores = [i[0] for i in sim_scores[1:]]

    # getting the title and data
    result_df = df.iloc[selected_course_indices]
    result_df['similarity_score'] = selected_course_scores
    finally_recommended = result_df[['course_title', 'similarity_score', 'url', 'price', 'num_subscribers']]
    return finally_recommended

# Styling
with open("template.html", "r", encoding="utf-8") as file:
    external_html_content = file.read()

Recommendation_style = f"""
{external_html_content}
"""

# Search 
def search_term_if_not_found(term, df):
    title_matches = df[df['course_title'].str.contains(term, case=False)]
    subject_matches = df[df['subject'].str.contains(term, case=False)]
    
    if title_matches.empty and subject_matches.empty:
        return pd.DataFrame(columns=df.columns)  # Empty DataFrame if no matches found
    else:
        return pd.concat([title_matches, subject_matches]).drop_duplicates()


def main():
    menu = ["Courses", "University", "Books"]
    choice = st.sidebar.selectbox("Menu", menu)

    df = load_data("data/udemy_courses.csv")

    if choice == "Courses":
        st.subheader("Course Recommendation")
        st.text("The platform recommends you udemy courses based on a given Course title, subject\nOr Use any keyword for searching")
        st.subheader("Copy and paste the Course title")
        st.text("Here are some famous udemy Courses based on web designing")
        st.text("React JS and Redux - Mastering Web Apps\nThe Complete HTML and CSS Course For Beginners\nLearn and Understand AngularJS\nExpressJS Fundamentals\nCSS :basics for beginners")
        search_examples = ["Graphic Design","Web Development","Business Finance"]
        search_course = st.text_input("Enter Udemy Course Title or subject", placeholder="E.g., " + ", ".join(search_examples)).lower()
        cosine_sim = vectorize_text(df['subject'])
        number_of_records = st.sidebar.number_input("Number", 4, 30, 7)


        if st.button("Enter"):
            if search_course is not None:
                st.info("Suggested Courses")
                try:
                    result = get_recommendation(search_course, cosine_sim, df, number_of_records)
                    for row in result.iterrows():
                        rec_title = row[1][0]
                        rec_score = row[1][1]
                        rec_url = row[1][2]
                        rec_price = row[1][3]
                        rec_num_sub = row[1][4]
                        
                        stc.html(Recommendation_style.format(rec_title, rec_score, rec_url, rec_price, rec_num_sub), height=250)
                except:
                    st.info("Suggested Courses")
                    result_df = search_term_if_not_found(search_course, df)
                    for row in result_df.iterrows():
                        rec_title = row[1][0]
                        rec_score = row[1][1]
                        rec_url = row[1][2]
                        rec_price = row[1][3]
                        rec_num_sub = row[1][4]
                
                        stc.html(Recommendation_style.format(rec_score, rec_title, rec_url, rec_price, rec_num_sub), height=250)


                
    elif choice == "University":
        st.subheader("University")
        search_course = st.text_input("Search")

    elif choice == "Books":
        st.subheader("Books")

    else:
        st.text("Build with Streamlit and pandas")

if __name__ == "__main__":
    main()