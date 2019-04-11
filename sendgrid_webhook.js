var localtunnel = require("localtunnel");
localtunnel(5000, { subdomain: "lsakjfldsakjdskjfldkfdj" }, function(
  err,
  tunnel
) {
  console.log("LT running");
});
