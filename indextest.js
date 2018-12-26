//https://www.npmjs.com/package/

//jsonwebtoken

const jwt = require("jsonwebtoken");

function removeKeyFromDictionary(dict, key) {
    if (key in dict) {
      delete dict[key]; // Removes the key if it exists
    }
    return dict; // Return the modified dictionary
  }

function generateToken(secretOrKey, payload, duration) {
    try {
    //   return jwt.sign(tpayload, tsecretOrKey);
      return jwt.sign(payload, secretOrKey, { expiresIn: duration }, { algorithm: 'RS256' });
    } catch (error) {
      return error;
    }
  }

;

function verifyToken(token, secretOrKey, tokenType) {
  try {
    // Verify the token
    const decoded = jwt.verify(token, secretOrKey);
    console.log("decoded", decoded);
    if (decoded.tokenType !== tokenType) {
        // Throw an error if token type doesn't match
        return {
            //For Production return this error
            error: `Invalid token`
            //For Debug Mode return this error
            //error: `Invalid token type. Expected ${tokenType}, but got ${decoded.tokenType}`
        };
    } else {
        return decoded; // Return the decoded payload
    }
  } catch (error) {
    return error;
  }
}

function test(secretOrKey, payload, duration){
    console.log("=======", payload, secretOrKey)
    const epochTime = Math.floor(Date.now() / 1000);
    const token = generateToken(secretOrKey, payload, duration);
    if (!token) {
        console.log("token gen failed");
    } else {
        const tokenresult = {}; // Create an empty map (object)

        if (payload.tokenType === "accesstoken") {
            tokenresult["accessToken"] = token;
            tokenresult["expiresAt"] = (epochTime+duration);
        } else {
            tokenresult["refreshToken"] = token;
        }
        
        console.log("- token", tokenresult);

        console.log("- decoding");
        // console.log(Math.floor(Date.now() / 1000) + (60 * 60))
        
        
        const decoderesult = verifyToken(token, secretOrKey, payload.tokenType);
        console.log("calling");
        console.log(token);
        console.log(secretOrKey);
        console.log(payload.tokenType);
        console.log(decoderesult.exp);
        if (decoderesult["tokenType"]) {
            console.log("decoderesult", typeof decoderesult)
            const finalResult = removeKeyFromDictionary(decoderesult, 'stack');
            console.log("Token is valid:", epochTime, (epochTime+duration), finalResult);
        } else {
            console.log("Token is invalid or expired.", decoderesult);
        }
    }
    
}

test(
    "i-am-secret",
    { id: 289, tokenType: 'accesstoken' },
    60
);

test(
    "i-am-secret",
    { id: 289, tokenType: 'refreshtoken' },
    120
);


//Test expired token
const r = verifyToken('sds.sd.sd',
            "i-am-secret",
            "accesstoken")

const iat = 1545836377
const exp = 1545836377

console.log(r, iat, (Math.floor(Date.now() / 1000)),  iat - (Math.floor(Date.now() / 1000)))