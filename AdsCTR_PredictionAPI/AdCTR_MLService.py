from flask import Flask, jsonify, request, json, abort, make_response
import pymysql as mysql
import numpy as np
import pandas
import pandas.io.sql as sql
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.cross_validation import train_test_split
from sklearn import metrics
from sklearn.cross_validation import cross_val_score
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
mysql_conn = mysql.connect(host='localhost',
                           port=3306, user='root', passwd='',
                           db='Test_DB')
query = "SELECT Ad_Title, Ad_Display_Position, Ad_Type, Search_Key_Text, Search_Location, \
Linking_Site_URL, Parent_Site_URL, Device_Type, Is_Clicked \
FROM Ad_Impressions, Ads_Information, Search_Information, Search_Keywords, Search_Keywords_Combo \
WHERE Ad_Impressions.Ad_Id = Ads_Information.Ad_Id \
AND Ad_Impressions.Search_Id = Search_Keywords_Combo.Search_Id \
AND Ad_Impressions.Search_Id = Search_Information.Search_Id \
AND Search_Keywords_Combo.Search_Key_Id = Search_Keywords.Search_Key_Id"
ad_impressions_frame = sql.read_sql_query(query, mysql_conn)
ads_ctr_model = LogisticRegression()
train, test = train_test_split(ad_impressions_frame, test_size = 0.2)
training_features = train.ix[:, 0:8]
training_targets = train.ix[:, 8:9]
training_targets = np.ravel(training_targets)
testing_targets = test.ix[:, 8:9]
X = training_features.apply(LabelEncoder().fit_transform)
Y = training_targets
ads_ctr_model.fit(X,Y)
ads_ctr_model.score(X, Y)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


@app.route('/', methods=['GET'])
def ads_model_api():
    return jsonify({'AdsCTRPredictiveModel': 'POST a new ad to get on demand click prediction'})


@app.route('/ad_model/api/v1/model_score', methods=['GET'])
def get_score():
    model_score = ads_ctr_model.score(X, Y)
    return str(model_score)


@app.route('/ad_model/api/v1/ctr_prediction', methods=['POST'])
def predict_ad_ctr():
    if not request.json:
        abort(400)
    new_ad_data = [request.json]
    new_ad_frame = pandas.DataFrame(new_ad_data)
    new_ad_features = new_ad_frame.apply(LabelEncoder().fit_transform)
    click_value = ads_ctr_model.predict(new_ad_features)
    ctr_value = ads_ctr_model.predict_proba(new_ad_features)
    response = {
        'CTR_Probability': ctr_value[0][1],
        'Click Prediction': click_value[0]
    }
    return jsonify(response), 200


@app.route('/ad_model/api/v1/get_prediction', methods=['GET'])
def get_ad_ctr():
    new_ad_dict = {
                      "Ad_Title": "Super Creative",
                      "Ad_Display_Position": "3",
                      "Ad_Type": "Type 2",
                      "Search_Key_Text": "Rusholme",
                      "Search_Location": "Tucson",
                      "Linking_Site_URL": "http://www.concordatwatch.eu/",
                      "Parent_Site_URL": "http://www.romasupportgroup.org.uk/",
                      "Device_Type": "Position 1"
                    }
    new_ad_data = [new_ad_dict]
    new_ad_frame = pandas.DataFrame(new_ad_data)
    print "Loaded new ad data frame"
    new_ad_features = new_ad_frame.apply(LabelEncoder().fit_transform)
    click_value = ads_ctr_model.predict(new_ad_features)
    ctr_value = ads_ctr_model.predict_proba(new_ad_features)
    response = {
        'CTR_Probability': ctr_value[0][1],
        'Click Prediction': click_value[0]
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, port=5000)