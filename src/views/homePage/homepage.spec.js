import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { toggleFavourite, getImage } from "./homepage.action";
import { loginSuccess } from "../login/login.action";

const middleware = [thunk];

const mockStore = configureStore(middleware);

const store = mockStore({
  favouriteImages: []
});

describe("Add favourite test", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    // store.clearActions();

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

    const fav = [
      {
        copyright: "Zixuan LinBeijing Normal U.",
        date: "2020-07-22",
        explanation:
          "What is creating the structure in Comet NEOWISE's tails? Of the two tails evident, the blue ion tail on the left points directly away from the Sun and is pushed out by the flowing and charged solar wind. Structure in the ion tail comes from different rates of expelled blue-glowing ions from the comet's nucleus, as well as the always complex and continually changing structure of our Sun's wind. Most unusual for Comet C/2020 F3 (NEOWISE), though, is the wavy structure of its dust tail. This dust tail is pushed out by sunlight, but curves as heavier dust particles are better able to resist this light pressure and continue along a solar orbit.  Comet NEOWISE's impressive dust-tail striations are not fully understood, as yet, but likely related to rotating streams of sun-reflecting grit liberated by ice melting on its 5-kilometer wide nucleus.  The featured 40-image conglomerate, digitally enhanced, was captured three days ago through the dark skies of the Gobi Desert in Inner Mongolia, China. Comet NEOWISE will make it closest pass to the Earth tomorrow as it moves out from the Sun. The comet, already fading but still visible to the unaided eye, should fade more rapidly as it recedes from the Earth.    Notable NEOWISE Images Submitted to APOD: July  21 || 20 || 19  || 18   || 17   || 16   || 15  || 14  || 13  || 12  || 11  || 10 & earlier ||",
        hdurl: "https://apod.nasa.gov/apod/image/2007/Neowise_Lin_3884.jpg",
        media_type: "image",
        service_version: "v1",
        title: "The Structured Tails of Comet NEOWISE",
        url: "https://apod.nasa.gov/apod/image/2007/Neowise_Lin_960.jpg"
      }
    ];

    localStorage.setItem("images", JSON.stringify(images));
    localStorage.setItem("favImages", JSON.stringify(fav));
  });

  test("save picture into localstorage successfully", async done => {
    await store.dispatch(toggleFavourite("07-22-2020")).then(async () => {
      const favouriteImages = JSON.parse(localStorage.getItem("favImages"));
      expect(favouriteImages.length).toBe(1);
      done();
    });
  });
});
