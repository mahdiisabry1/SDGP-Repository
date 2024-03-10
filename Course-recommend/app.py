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
    #Get the cosine
    cosine_sim = cosine_similarity(cv_mat)
    return cosine_sim

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
        st.dataframe(df.head(10))
        number_of_records = st.sidebar.number_input("Number",4,20,7)
        if st.button("Enter"):
            if search_course is not None:
                pass

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