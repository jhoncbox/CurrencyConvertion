/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function calculate(){
    currencyAPI()
    exchange = document.getElementById("rate").innerHTML
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);    
    var result = ' ';
    if(num1 == ' '){
        result = "$ " +(1/exchange)*num2
    }else if(num2 = ' '){
        result = "€ " +num1 * exchange
    }
    document.getElementById("result").innerHTML = result;   
}

function currencyAPI(){
    var http = new XMLHttpRequest();
    const url ="http://www.apilayer.net/api/live?access_key=3e548696459784a7d79c5204a4cc4d2d";
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
            var response = http.responseText;
            var responseJSON = JSON.parse(response); 
            console.log(response);
            console.log(responseJSON);
            // printing attributes in the front end
            var rate = responseJSON.quotes.USDEUR;
            document.getElementById("rate").innerHTML = rate
    }

}
currencyAPI()