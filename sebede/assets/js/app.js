var notify = `			<div id="notification-container" class="col">
<div class="notification-wrapper col">
 <img src="./assets/img/success.svg" alt="success symbol">
 <h1 class="transaction-status">Transaction successful</h1>
 <p id="notification-message">Thank you for using our service.
  You will be credited with 20gb on
  081 4493 5610 shortly.</p>
</div>
<ul class="other-services flex col">
 <h2>Other services <a href="tel:+2348144935610">( 081 4493 5610 )</a></h2>
 <li>Sales of PIN for result (WAEC, NECO, GCE, JAMB)</li>
 <li>Cable TV subscription (DsTv, GoTv, Startimes)</li>
 <li>Cheap bulk airtime sales</li>
 <li>Cheap bulk data sales</li>
 <li>Airtime to cash</li>
</ul>
</div>`
document.getElementById("proceed-btn").addEventListener("click", function(e){
 e.preventDefault()
document.getElementById("main").innerHTML = notify;
})