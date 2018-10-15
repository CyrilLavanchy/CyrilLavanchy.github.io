function greeter(person: string) {
  return "Herzlich Willkommen auf NFL Analytics, " + person;
}

let user = "Cyril Lavanchy";

document.body.innerHTML = greeter(user);
