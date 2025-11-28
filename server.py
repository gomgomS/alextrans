

import json
import time
import pymongo
import sys
import urllib.parse
import base64
import urllib
import ast
import pdfkit
import html as html_unescape
import os

from urllib.parse import urlencode

sys.path.append("pytavia_core")
sys.path.append("pytavia_settings")
sys.path.append("pytavia_stdlib")
sys.path.append("pytavia_storage")
sys.path.append("pytavia_modules")
sys.path.append("pytavia_modules/auth")
sys.path.append("pytavia_modules/configuration")
sys.path.append("pytavia_modules/cookie")
sys.path.append("pytavia_modules/middleware")
sys.path.append("pytavia_modules/security")
sys.path.append("pytavia_modules/user")
sys.path.append("pytavia_modules/view")



##########################################################
from pytavia_core       import database
from pytavia_core       import config

from pytavia_stdlib     import utils
from pytavia_stdlib     import cfs_lib
from pytavia_stdlib     import idgen
from pytavia_stdlib     import sanitize
from pytavia_stdlib     import security_lib


##########################################################
from configuration      import config_all
from configuration      import config_setting_security_timeout


from cookie             import cookie_engine
from middleware         import browser_security
from security           import security_login
from user               import user_proc

from view               import view_welcome
from view               import view_index
from booking            import booking_proc

##########################################################
# LANDINGPAGE
##########################################################
from flask              import request
from flask              import render_template
from flask              import Flask
from flask              import session
from flask              import make_response
from flask              import redirect
from flask              import url_for
from flask              import flash, get_flashed_messages
from flask              import abort
from flask              import jsonify 
from flask              import send_from_directory

from wtforms            import ValidationError

from flask_wtf.csrf     import CSRFProtect
from flask_wtf.csrf     import CSRFError

#
# Main app configurations
#
app                   = Flask( __name__, config.G_STATIC_URL_PATH )
app.secret_key        = config.G_FLASK_SECRET
app.session_interface = cookie_engine.MongoSessionInterface()
csrf                  = CSRFProtect(app)

app.config['WTF_CSRF_TIME_LIMIT'] = 86400

# Increase CSRF token expiration time (e.g., 1 day)
app.config['WTF_CSRF_TIME_LIMIT'] = 86400  # in seconds

#
# Utility Function
#
# @app.errorhandler(CSRFError)
# def handle_csrf_error(e):
#     return redirect(url_for("login_html"))
# # end def


# @app.route("/")
# def landingpage():
#     fk_user_id  = session.get("fk_user_id")
#     params = request.form.to_dict()
#     # end if

#     html   = view_landing_page.view_landing_page().html( params )
#     return html

# @app.route("/")
# def index():
#     return view_welcome.view_welcome().html()

##########################################################
################# alextrans ################
##########################################################
@app.route("/")
def index():
    return view_index.view_index().html()

@app.route("/count-estimation-price", methods=["GET"])
def booking():
    return booking_proc.booking_proc().calculate_and_render(request.args.to_dict())

@app.route("/<path:filename>")
def assets(filename):
    return send_from_directory(os.path.join("templates", "alextrans", "alextrans"), filename)

@app.route("/layanan")
def layanan():
    # Load pricing data like index page
    pricing = []
    try:
        path = os.path.join("static", "json_file", "pricing_armada.json")
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as fp:
                pricing = json.load(fp)
    except Exception:
        pricing = []
    return render_template("layanan.html", pricing=pricing)

@app.route("/contact")
def contact():
    return render_template("contact.html")
