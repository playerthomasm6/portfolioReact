import React from "react";
import Nav from "../components/Nav";
import "./style.css";
import Footer from"../components/Footer";
import Header from "../components/Header";


function Contact() {

  return (
  <div className="bg-dark">
   <Header/>
  <form id="contact-form" method="post" action="contact.php" role="form">

    <div className="messages"></div>

    <div className="controls">

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="form_name">Firstname *</label>
            <input id="form_name" type="text" name="name" class="form-control"
              placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="form_lastname">Lastname *</label>
            <input id="form_lastname" type="text" name="surname" class="form-control"
              placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
            <div className="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="form_email">Email *</label>
            <input id="form_email" type="email" name="email" class="form-control"
              placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="form_need">Please specify your need *</label>
            <select id="form_need" name="need" class="form-control" required="required"
              data-error="Please specify your need.">
              <option value=""></option>
              <option value="Request quotation">Interested Employer</option>
              <option value="Request order status">Request Interview</option>
              <option value="Request copy of an invoice">Third Option</option>
              <option value="Other">Other</option>
            </select>
            <div class="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div classHName="row">
        <div className="col-md-12">
          <div className="form-group">
            <label for="form_message">Message *</label>
            <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4"
              required="required" data-error="Please, leave us a message."></textarea>
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-12">
          <input type="submit" class="btn btn-success btn-send" value="Send message"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        </div>
      </div>
    </div>

  </form>
  <br/><br/><br/><br/>
  <Footer/>
  </div>
    );
  }


export default Contact;
