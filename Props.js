function Props(props)
{
    return(
<div style={{backgroundColor : "yellow", width:"1300px", height:"1300px"}}  >
<h1>User</h1>
<h1 style={{backgroundColor : "red" ,margin : "20px", color:"white"}}> Name  : {props.name}</h1>
<h1 style={{backgroundColor : "red" ,margin : "20px", color:"white"}}> Email : {props.email}</h1>
<h1 style={{backgroundColor : "red" ,margin : "20px", color:"white"}}> fname : {props.other.fname}</h1>
<h1 style={{backgroundColor : "red" ,margin : "20px", color:"white"}}> lname : {props.other.lname}</h1>
<h1 style={{backgroundColor : "red" ,margin : "20px", color:"white"}}> Degree : {props.other.degree}</h1>
<h1 style={{backgroundColor : "red" ,margin : "20px", color:"white"}}> Skills : {props.other.Skills}</h1>
</div>
    );
}
export default Props;