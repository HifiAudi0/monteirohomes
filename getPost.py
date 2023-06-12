import bleach
from flask import Flask, request
from dotenv import load_dotenv
import html
import os
import smtplib
import email.utils
import sys
from email.mime.text import MIMEText


load_dotenv()

allowed_tags = ['p']

app = Flask(__name__)
#if __name__ == '__main__':
#    app.run(host='0.0.0.0')
@app.route('/sendMailFlask', methods=['POST'])
def result():
    #print(request.form['foo']) # should display 'bar'
    #print(request.args.get("foo"))
    #response = request.args.get
    #response.headers['Content-Security-Policy'] = "default-src 'self'"
    #data = []

    name = request.args.get('name')
    customer_email = request.args.get('email')
    message = request.args.get('message')

    sanitized_name = html.escape(name)
    sanitized_email = html.escape(customer_email)
    sanitized_message = html.escape(message)
    
    sanitized_name = bleach.clean(sanitized_name, tags=allowed_tags)
    sanitized_email = bleach.clean(sanitized_email, tags=allowed_tags)
    sanitized_message = bleach.clean(sanitized_message, tags=allowed_tags)

    #return sanitized_data, 201 # response to your request.

        # Prompt the user for connection info
    to_email = os.environ.get("TO_EMAIL")
    #to_email = ('1samuelgibbins@gmail.com')
    servername = os.environ.get("MAIL_SERVER")
    username = os.environ.get("USERNAME")
    #password = getpass.getpass("%s's password: " % username)
    sys.path.insert(0, '../')
    #from configEmail import passw
    #password = passw
    password = os.environ.get("SEPH_PASS")

    # Create the message
    #part1 = MIMEText(sanitized_name) 
    #part2 = MIMEText(sanitized_email) 
    #part3 = MIMEText(sanitized_message)

    #msg = MIMEText(sanitized_name + '\n' + sanitized_email + '\n' + sanitized_message)
    msg = MIMEText(sanitized_message)

    msg.set_unixfrom('author')
    msg['To'] = email.utils.formataddr(('Recipient', to_email))
    msg['From'] = email.utils.formataddr(('Author', username))
    msg['Subject'] = 'New Quote from monteirohomes.ca\n.'

    server = smtplib.SMTP(servername)
    try:
        server.set_debuglevel(True)

        # identify ourselves, prompting server for supported features
        server.ehlo()

        # If we can encrypt this session, do it
        if server.has_extn('STARTTLS'):
            server.starttls()
            server.ehlo() # re-identify ourselves over TLS connection

        server.login(username, password)
        server.sendmail(username, [to_email], msg.as_string())
    finally:
        server.quit()









