let count = 0;

function incrementCount() {
	count++;
	document.getElementById('count').innerText = count.toString();
}

// Secure coding practices:
// 1. Use a secure random number generator (not shown).
// 2. Validate and sanitize user input (not shown).
// 3. Use a Web Application Firewall (WAF) or similar protection.