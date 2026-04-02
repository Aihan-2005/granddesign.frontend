export async function validOtp(obj) {
  console.log(obj)
  const urlOtp = `http://localhost:8000/api/v1/auth/otp`
  const resOtp = await fetch(urlOtp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })

  const response = await resOtp.json()
  console.log(response)
  return response
}

export async function registerFunction(obj) {
  console.log(obj)
  const url = `http://localhost:8000/api/v1/auth/signup`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  if (res.status === 429) {
    return { success: false, message: "درخواست‌های بیش از حد. لطفاً کمی صبر کنید." };
  }

  try {
    const response = await res.json();
    return response;
  } catch (e) {
    return { success: false, message: "پاسخ نامعتبر از سرور." };
  }
}


export async function login(obj) {
  const url = `http://localhost:8000/api/v1/auth/login`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
  const response = await res.json()
  console.log(response)
  return response
}
