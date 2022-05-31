import os
import pandas as pd
import numpy as np

from .configCred import postgres_route
# from configCred import postgres_route

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session, create_session
from sqlalchemy import create_engine, inspect

from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.ext.declarative import declarative_base

import json


app = Flask(__name__)

ENV = "production"


if ENV == "dev":
    app.debug = True
    app.config["SQLALCHEMY_DATABASE_URI"] = postgres_route
else:
    app.debug = False
    app.config["SQLALCHEMY_DATABASE_URI"] = postgres_route
    

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)

inspector = inspect(db.engine)
tables = inspector.get_table_names()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/default_data")
def data_route():

    conn = db.engine.connect()

    # For more specific routes:
    # Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE prize_money >= 500000", conn)

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'}", conn)
    Show_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Show_data)

@app.route("/hot_seat_question")
def hot_seat_route():

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE lost_on_question > 0", conn)
    Hot_seat_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Hot_seat_data)

@app.route("/total_losses")
def total_losses():

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE constestant_outcome != 'na' AND lost_on_question > 0", conn)
    Total_losses_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Total_losses_data)

@app.route("/total_losses/<question_losses>")
def tota_question_losses(question_losses):

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE constestant_outcome != 'na' AND lost_on_question = '{question_losses}'", conn)
    Question_losses_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Question_losses_data)

@app.route("/lifeline_data")
def lifeline_data():

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE ask_the_audience < 2", conn)
    Lifeline_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Lifeline_data)


@app.route("/ask_the_audience")
def ask_the_audience():

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE ask_the_audience < 2 AND ask_the_audience_correct = 1", conn)
    Ask_the_audience_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Ask_the_audience_data)

@app.route("/ask_the_audience_question_used/<ata_question>")
def ask_the_audience_question_used(ata_question):

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE ask_the_audience_correct < 2 AND ask_the_audience_question='{ata_question}'", conn)
    Ask_the_audience_question_used_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Ask_the_audience_question_used_data)

@app.route("/ask_the_audience_question_used_percent/<ata_question>")
def ask_the_audience_question_used_percent(ata_question):

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE ask_the_audience_correct = 1 AND ask_the_audience_percentage > 0 AND ask_the_audience_question='{ata_question}'", conn)
    Ask_the_audience_question_used_percent_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Ask_the_audience_question_used_percent_data)

@app.route("/fifty_fifty")
def fifty_fifty():

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE fifty_fifty < 2 AND fifty_fifty_correct = 1", conn)
    Fifty_fifty_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Fifty_fifty_data)

@app.route("/fifty_fifty_question_used/<ff_question>")
def fifty_fifty_question_used(ff_question):

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE fifty_fifty_correct < 2 AND fifty_fifty_question='{ff_question}'", conn)
    Fifty_fifty_question_used_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Fifty_fifty_question_used_data)

@app.route("/phone_a_friend_question_used/<paf_question>")
def phone_a_friend_question_used(paf_question):

    conn = db.engine.connect()

    Show_data_conn = pd.read_sql(f"SELECT * FROM {'season_one_data'} WHERE phone_a_friend_correct < 2 AND phone_a_friend_question='{paf_question}'", conn)
    Phone_a_friend_question_used_data = {
        "id": Show_data_conn.id.values.tolist(),
        "name": Show_data_conn.name.values.tolist(),
        "fastest_finger_time": Show_data_conn.fastest_finger_time.values.tolist(),
        "prize_money": Show_data_conn.prize_money.values.tolist(),
        "questions_answered": Show_data_conn.questions_answered.values.tolist(),
        "lost_on_question": Show_data_conn.lost_on_question.values.tolist(),
        "money_lost": Show_data_conn.money_lost.values.tolist(),
        "constestant_outcome": Show_data_conn.constestant_outcome .values.tolist(),
        "ask_the_audience": Show_data_conn.ask_the_audience.values.tolist(),
        "fifty_fifty": Show_data_conn.fifty_fifty.values.tolist(),
        "phone_a_friend": Show_data_conn.phone_a_friend.values.tolist(),
        "ask_the_audience_question": Show_data_conn.ask_the_audience_question.values.tolist(),
        "ask_the_audience_percentage": Show_data_conn.ask_the_audience_percentage.values.tolist(),
        "ask_the_audience_correct": Show_data_conn.ask_the_audience_correct.values.tolist(),
        "fifty_fifty_question": Show_data_conn.fifty_fifty_question.values.tolist(),
        "fifty_fifty_correct": Show_data_conn.fifty_fifty_correct.values.tolist(),
        "phone_a_friend_question": Show_data_conn.phone_a_friend_question.values.tolist(),
        "phone_a_friend_correct": Show_data_conn.phone_a_friend_correct.values.tolist(),
        "phoned_who": Show_data_conn.phoned_who.values.tolist(),
        "bad_question": Show_data_conn.bad_question.values.tolist(),
        "bad_question_number": Show_data_conn.bad_question_number.values.tolist(),
    }

    return jsonify(Phone_a_friend_question_used_data)


# Lifeline Lists for Dropdown menus

@app.route("/ask_the_audience_list")
def ask_the_audience_list():

    conn = db.engine.connect()
    Show_data_conn = pd.read_sql(f"SELECT ask_the_audience_question FROM {'season_one_data'} WHERE ask_the_audience_question > 0 ORDER BY ask_the_audience_question", conn)
    Ata_list = Show_data_conn.ask_the_audience_question.unique()
    Ata_list = list(np.ravel(Ata_list))

    return jsonify(Ata_list) 

@app.route("/fifty_fifty_list")
def fifty_fifty_list():

    conn = db.engine.connect()
    Show_data_conn = pd.read_sql(f"SELECT fifty_fifty_question FROM {'season_one_data'} WHERE fifty_fifty_question > 0 ORDER BY fifty_fifty_question", conn)
    Ff_list = Show_data_conn.fifty_fifty_question.unique()
    Ff_list = list(np.ravel(Ff_list))

    return jsonify(Ff_list) 

@app.route("/phone_a_friend_list")
def phone_a_friend_list():

    conn = db.engine.connect()
    Show_data_conn = pd.read_sql(f"SELECT phone_a_friend_question FROM {'season_one_data'} WHERE phone_a_friend_question > 0 ORDER BY phone_a_friend_question", conn)
    Paf_list = Show_data_conn.phone_a_friend_question.unique()
    Paf_list = list(np.ravel(Paf_list))

    return jsonify(Paf_list) 



# Route for Unique Loss Values

@app.route("/lost_values_list")
def lost_values_list():

    conn = db.engine.connect()
    Show_data_conn = pd.read_sql(f"SELECT DISTINCT money_lost FROM {'season_one_data'} WHERE money_lost > 0 ORDER BY money_lost", conn)
    Lost_list = Show_data_conn.money_lost.unique()
    Lost_list = list(np.ravel(Lost_list))

    return jsonify(Lost_list) 




# HTML Page Routes

@app.route("/Overview")
def overview_route():

    Overview_route = 1
    return render_template("overview.html")

@app.route("/Ask_The_Audience")
def ata_route():

    dictionary = dict();
    dictionary["Ask_The_Audience_HTML"] = render_template("ata.html")

    return dictionary.get("Ask_The_Audience_HTML")

@app.route("/50:50")
def fiftyfifty_route():

    Fifty_fifty_route = 1
    return render_template("ff.html")

@app.route("/Phone_A_Friend")
def paf_route():

    Phone_a_friend_route = 1
    return render_template("paf.html")

@app.route("/About")
def about_route():

    About_route = 1
    return render_template("about.html")

if __name__ == "__main__":
    # app.debug = True
    app.run()