class User {
        static userCount = 0;
    
        constructor(username)
         {
    this.username = username;
    User.userCount++;
    
        }
        
    }
    
    const u1 = new User("Daina");
    console.log(User.userCount); 
    
    const u2 = new User("Deen");
    console.log(User.userCount); 
    
    const u3 = new User("Dunya");
    console.log(User.userCount); 