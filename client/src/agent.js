import { getJWT } from "./utils/authUtils";
let API_ROOT = "https://cai-won-dotnet-rpg.azurewebsites.net/";

// For testing purposes
// API_ROOT = "http://localhost:5000/";

const auth = {
  signin: (username, password) => {
    const credentials = {
      username: username,
      password: password,
    };

    fetch(API_ROOT + "auth/login/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const jwt = data.data;
          localStorage.setItem("jwt", jwt);
          window.location.href = "/";
        } else {
          console.error(data);
        }
      });
  },
  signup: (username, password) => {
    const credentials = {
      username: username,
      password: password,
    };

    fetch(API_ROOT + "auth/register/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = "/auth/signin/";
        }
      });
  },
};

const character = {
  getById: (id, setCharacter) => {
    const jwt = getJWT();

    if (jwt) {
      fetch(API_ROOT + `character/${id}`, {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      })
        .then((response) => response.json())
        .then((data) => setCharacter(data.data));
    }
  },
  getall: (setCharacters) => {
    const jwt = getJWT();

    if (jwt) {
      fetch(API_ROOT + "character/getall", {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      })
        .then((response) => response.json())
        .then((data) => setCharacters(data.data));
    }
  },
  create: (characterObj, navigate) => {
    fetch(API_ROOT + "character", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + getJWT(),
      },
      body: JSON.stringify(characterObj),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/character/", { replace: true });
        window.location.reload();
      });
  },
  delete: (characterId, setCharacters) => {
    const jwt = getJWT();

    if (jwt) {
      fetch(API_ROOT + "character/" + characterId, {
        headers: {
          Authorization: "Bearer " + jwt,
        },
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => setCharacters(data.data));
    }
  },
  edit: (characterObj, navigate) => {
    fetch(API_ROOT + "character", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + getJWT(),
      },
      body: JSON.stringify(characterObj),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/character/", { replace: true });
        window.location.reload();
      });
  },
};

const weapon = {
  add: (newWeaponObj) => {
    fetch(API_ROOT + "weapon/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + getJWT(),
      },
      body: JSON.stringify(newWeaponObj),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.pathname = "/character/";
        } else {
          console.error(data);
        }
      });
  },
};

const skill = {
  getAll: (setSkills) => {
    const jwt = getJWT();

    if (jwt) {
      fetch(API_ROOT + "skill/", {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      })
        .then((response) => response.json())
        .then((data) => setSkills(data.data));
    }
  },
  addCharacterSkill: (newCharacterSkill) => {
    fetch(API_ROOT + "characterskill/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + getJWT(),
      },
      body: JSON.stringify(newCharacterSkill),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.pathname = "/character/";
        } else {
          console.error(data);
        }
      });
  },
};
const fight = {

  start: (idArr, setFightLogs) => {
    fetch(API_ROOT + "fight", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + getJWT(),
      },
      body: JSON.stringify(idArr),
    })
      .then((response) => response.json())
      .then((data) => {
        setFightLogs(data.data.log);
      });
  },
}
export { auth, character, weapon, skill, fight };
