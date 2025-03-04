export default function Friend ({friend}){
    // console.log(friend)
    const {email,name}=friend;
    return(
        <div className="box">
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
        </div>
    )
}