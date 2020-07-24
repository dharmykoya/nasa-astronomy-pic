import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { toggleFavourite } from "./homepage.action";
import { loginSuccess } from "../login/login.action";

const middleware = [thunk];

const mockStore = configureStore(middleware);

let store;
describe("Add favourite test", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    // store.clearActions();
    store = mockStore();

    const images = {
      "2020-07-22": {
        copyright: "Zixuan LinBeijing Normal U.",
        date: "2020-07-22",
        explanation:
          "What is creating the structure in Comet NEOWISE's tails? Of the two tails evident, the blue ion tail on the left points directly away from the Sun and is pushed out by the flowing and charged solar wind. Structure in the ion tail comes from different rates of expelled blue-glowing ions from the comet's nucleus, as well as the always complex and continually changing structure of our Sun's wind. Most unusual for Comet C/2020 F3 (NEOWISE), though, is the wavy structure of its dust tail. This dust tail is pushed out by sunlight, but curves as heavier dust particles are better able to resist this light pressure and continue along a solar orbit.  Comet NEOWISE's impressive dust-tail striations are not fully understood, as yet, but likely related to rotating streams of sun-reflecting grit liberated by ice melting on its 5-kilometer wide nucleus.  The featured 40-image conglomerate, digitally enhanced, was captured three days ago through the dark skies of the Gobi Desert in Inner Mongolia, China. Comet NEOWISE will make it closest pass to the Earth tomorrow as it moves out from the Sun. The comet, already fading but still visible to the unaided eye, should fade more rapidly as it recedes from the Earth.    Notable NEOWISE Images Submitted to APOD: July  21 || 20 || 19  || 18   || 17   || 16   || 15  || 14  || 13  || 12  || 11  || 10 & earlier ||",
        hdurl: "https://apod.nasa.gov/apod/image/2007/Neowise_Lin_3884.jpg",
        media_type: "image",
        service_version: "v1",
        title: "The Structured Tails of Comet NEOWISE",
        url: "https://apod.nasa.gov/apod/image/2007/Neowise_Lin_960.jpg"
      },
      "2020-07-23": {
        copyright: "Stephane Guisard",
        date: "2020-07-23",
        explanation:
          "Comet dust falls through a twilight sky in this dream-like scene, but it's not part of a fairytale movie. Still, Castle Neuschwanstein, nestled in the Bavarian Alps, did inspire Disneyland's Sleeping Beauty Castle. Captured on July 20, the bright streak above the castle towers is likely a Perseid meteor. Though it peaks near mid-August, the annual summer meteor shower is active now. The meteor trail over the fairytale castle can be traced back to the shower's radiant in the heroic constellation Perseus off the top right of the frame. Perseid meteors are produced by dust from periodic Comet Swift-Tuttle. With its own broad dust tail now sweeping through northern skies the celestial apparition above the distant horizon is planet Earth's current darling, Comet NEOWISE.  Comet NEOWISE Images:  July  22 || 21 || 20 || 19  || 18   || 17   || 16   || 15  || 14  || 13  || 12  || 11  || 10 & earlier ||",
        hdurl:
          "https://apod.nasa.gov/apod/image/2007/SGUNeuschwansteinNeowiseIMG2532-1920.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Fairytale NEOWISE",
        url:
          "https://apod.nasa.gov/apod/image/2007/SGUNeuschwansteinNeowiseIMG2532-1050.jpg"
      }
    };

    const user = {
      uid: "pAdZ6PEV9SVpBmp3EuLKGuODon52",
      displayName: null,
      photoURL: null,
      email: "dami@yahoo.com",
      emailVerified: false,
      phoneNumber: null,
      isAnonymous: false,
      tenantId: null,
      providerData: [
        {
          uid: "dami@yahoo.com",
          displayName: null,
          photoURL: null,
          email: "dami@yahoo.com",
          phoneNumber: null,
          providerId: "password"
        }
      ],
      apiKey: "AIzaSyA9JTXJIRtihN7RKdYMP9XfwBBeum2APhc",
      appName: "[DEFAULT]",
      authDomain: "nasa-astro-pic.firebaseapp.com",
      stsTokenManager: {
        apiKey: "AIzaSyA9JTXJIRtihN7RKdYMP9XfwBBeum2APhc",
        refreshToken:
          "AE0u-NdTG3dHmERoSKA2urxsB6x3EDsdXifOmrZgGf8x6tWbbaKSVxH_Y376blRtimAj0W794n6JmhFf3sl5nLrrE0rF-YVzGpwq6zHCatKfqmfKCZZPPcbqkPFALmhvYaGW7dN8bdXffx-xCOjvdTuecm_uWYKcyq607hmvysN0BTv3t7vPPL0yQqSkZjDunVZcXTGSgz-__TPm8jWfLu9g9Rqiiue2yw",
        accessToken:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjZmMyMzViZDYxMGZhY2FlYzVlYjBhZGU5NTg5ZGE5NTI4MmRlY2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmFzYS1hc3Ryby1waWMiLCJhdWQiOiJuYXNhLWFzdHJvLXBpYyIsImF1dGhfdGltZSI6MTU5NTUzMjg0MiwidXNlcl9pZCI6InBBZFo2UEVWOVNWcEJtcDNFdUxLR3VPRG9uNTIiLCJzdWIiOiJwQWRaNlBFVjlTVnBCbXAzRXVMS0d1T0RvbjUyIiwiaWF0IjoxNTk1NTMyODQyLCJleHAiOjE1OTU1MzY0NDIsImVtYWlsIjoiZGFtaUB5YWhvby5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFtaUB5YWhvby5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DDHT04iqg1LkRCEb-BmuLvWt-z8kej-Lub2feN5QMqbhM9iDKcpjHpCGWeJtxpey_fvG44pEb5hD_TLQDImXQHyYol4omIwFifkUbEr-hKLc5twYNr_Z43aXFfezSOL0RCadfV0s3gXLYFrIhW4VWzVlCHhd1ctht8Un17JZrUeXRuLzUH1yCbaiN97kAAt8TVTECjq06DeYQPy-Y1vnam0fRPApTB2g5vMaGKGGxjbtzBpWY9LSzqxXtIrkjnlVvpbW-c0eUo-bOkpbk4BoZSoXOYcIUK8z41gdpC3nWZXTR37S540InYmAWN40t5RUXYvXTjecv_FJg8rY1w_uiQ",
        expirationTime: 1595536442000
      },
      redirectEventId: null,
      lastLoginAt: "1595532842088",
      createdAt: "1595511179582",
      multiFactor: {
        enrolledFactors: []
      }
    };

    store.dispatch(loginSuccess(user));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("images", JSON.stringify(images));

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  test("Dispatches the correct action and payload", () => {
    store.dispatch(toggleFavourite("20-07-2020"));

    // expect(window.localStorage.setItem).toHaveBeenCalled();
    console.log(store.getActions());
  });

  it("successfully updates local storage", async done => {
    await store.dispatch(toggleFavourite("20-07-2020")).then(async () => {
      const favImages = JSON.parse(localStorage.getItem("user"));
      //   expect(window.localStorage.setItem).toHaveBeenCalled();
      //   expect(favImages.length).toBe(1);
      done();
    });
  });
});
