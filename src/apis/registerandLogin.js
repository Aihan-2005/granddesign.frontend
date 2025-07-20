export default async function validOtp(obj) {
  const urlOtp = `http://localhost:8000/api/v1/auth/otp`;
  //   const url = `${process.env.URL_APIS}/api/v1/auth/sign-up`
  const resOtp = await fetch(urlOtp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  const response = await resOtp.json(); 
  console.log(response);
  return response; 

}


export default async function registerFunction(obj) {
  const url = `http://localhost:8000/api/v1/auth/sign-up`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
    const response = await res.json(); 
  console.log(response);
  return response; 
}



// export default async function login(obj) {
//   console.log(obj);
//   const url = `${process.env.URL_APIS}/api/v1/auth/login`;
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json", 
//     },
//     body: JSON.stringify(obj),
//   });
//   const response = await res.json(); 
//   console.log(response);
//   return response;
// }