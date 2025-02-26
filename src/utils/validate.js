
export const checkvalidate = (email,password,name) => {
    const Emailvalidate=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const Passwordvalidate=/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    const Namevalidate= /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(name);
      
    if(!Namevalidate) return "Name is not valid";
    if(!Emailvalidate) return "Email is not valid";
    if(!Passwordvalidate) return "Password is not valid";
 

    return null;
  
}


