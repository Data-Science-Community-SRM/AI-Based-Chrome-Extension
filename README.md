# AI-Based-Chrome-Extension - PhishGuardian



PhishGuardian aims to detect whether a URL is safe or not using a decision tree algorithm. The project uses a web app to interact with users, and a Python backend to process the user input and make predictions about the safety of a given URL.
The decision tree algorithm is a machine learning technique that uses a series of binary decisions to classify input data into categories. In the case of PhishGuardian, the algorithm analyzes the characteristics of a URL and decides whether it is safe or not based on a set of pre-defined rules. The algorithm is trained on a dataset of known safe and phishing URLs, so it can accurately classify new URLs that it hasn't seen before. The web app allows users to input a URL and receive a prediction about its safety. The user interface is designed to be user-friendly and intuitive, with clear instructions on how to use the app. Once the user inputs a URL, the app sends the URL to the Python backend, which runs the decision tree algorithm and returns a prediction about the safety of the URL. The prediction is then displayed to the user in the web app.
The Python backend is responsible for processing the user input, running the decision tree algorithm, and returning the prediction to the web app. The backend is written in Python, which is a popular language for machine learning and data analysis. The backend is also responsible for training the decision tree algorithm on a dataset of known safe and phishing URLs, so it can make accurate predictions.





## Screenshot 
### Landing Page 
![Landing Page](https://user-images.githubusercontent.com/75358720/226133661-ee11bb1d-2c8e-4891-902b-5cebbd40e1f8.png)


### Results Page 
![Result Page](https://user-images.githubusercontent.com/90250628/226135496-10a0ca52-8f2b-4a84-a01e-d69645dc7b05.jpg)


## Technologies Used -
* Flask
* Sk-Learn
* HTML and CSS
* Selenium
* Git

## Data-set credits -

```
@misc{Dua:2019 ,
author = "Dua, Dheeru and Graff, Casey",
year = "2017",
title = "{UCI} Machine Learning Repository",
url = "http://archive.ics.uci.edu/ml",
institution = "University of California, Irvine, School of Information and Computer Sciences" }

Dua, D. and Graff, C. (2019). UCI Machine Learning Repository [http://archive.ics.uci.edu/ml]. Irvine, CA: University of California, School of Information and Computer Science.


```
## Reference research papers -


* Mohammad, Rami, McCluskey, T.L. and Thabtah, Fadi (2012) An Assessment of Features Related to Phishing Websites using an Automated Technique. In: International Conferece For Internet Technology And Secured Transactions. ICITST 2012 . IEEE, London, UK, pp. 492-497. ISBN 978-1-4673-5325-0

* Mohammad, Rami, Thabtah, Fadi Abdeljaber and McCluskey, T.L. (2014) Predicting phishing websites based on self-structuring neural network. Neural Computing and Applications, 25 (2). pp. 443-458. ISSN 0941-0643

* Mohammad, Rami, McCluskey, T.L. and Thabtah, Fadi Abdeljaber (2014) Intelligent Rule based Phishing Websites Classification. IET Information Security, 8 (3). pp. 153-160. ISSN 1751-8709
