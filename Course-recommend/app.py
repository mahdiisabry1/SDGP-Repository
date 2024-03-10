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

def main():
    st.title("Get Recommendations")
    # Your recommendation logic here
    # recommendations = ["AI and machine learning Course", "Python Course", "Javascript 3"]
    # st.write(f"## Recommended Courses")
    # st.write(recommendations)
    menu = ["","Courses", "University", "Books"]
    choice = st.sidebar.selectbox("Menu", menu)

    df = load_data("data/udemy_courses.csv")
    uf = load_data("data/Colleges_and_Universities.csv")

    if choice == "Courses":
        st.subheader("Courses")
        search_course = st.text_input("What are you interested in")
        cosine_sim = vectorize_text(df['course_title'])
        st.dataframe(df.head(10))
        if st.button("Enter"):
            if search_course is not None:
                try:
                    result = get_recommendation(search_course, cosine_sim, df)
                except:
                    result = "Not Found"
                for row in result.iterrows():
                    rec_title = row[1][0]
                    rec_score = row[1][1]
                    rec_url = row[1][2]
                    rec_price = row[1][3]
                    rec_num_sub = row[1][4]

                    st.write("Title : ", rec_title)
                    st.write("URL :", rec_url)

    elif choice == "University":
        st.subheader("University")
        st.dataframe(uf.head(5))
        search_course = st.text_input("Search")

    elif choice == "Books":
        st.subheader("Books")

    else:
        st.text("Build with Streamlit and pandas")

if __name__ == "__main__":
    main()