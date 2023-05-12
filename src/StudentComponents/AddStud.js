import Base from "../Base/Base";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert";
import AppPro from "../UseContext/AppProvider";


 function AddStud() {
  const { students, setStudents, name, setName, gender, setGender, sub1, setSub1, sub2, setSub2, sub3, setSub3, } = AppPro();
  
  const history = useHistory();

  // ADD STUDENT FUNCTION
  function addStudent() {
    if (!name) {
      Swal("Fail To Add", "Please fill all the Fields", "error");
    } else if (!gender) {
      Swal("Fail To Add", "Gender Field is Required", "error");
    } else if (!sub1) {
      Swal("Fail To Add", "English Field is Required", "error");
    } else if (!sub2) {
      Swal("Fail To Add", "Maths Field is Required", "error");
    } else if (!sub3) {
      Swal("Fail To Add", "Physics Field is Required", "error");
    } else {
      const newStudent = {
        name,
        gender,
        english: sub1,
        maths: sub2,
        physics: sub3,
      };
      setStudents([...students, newStudent]);
      history.push("/");
      Swal("Success", "Added Successfully", "success");
    }
  }

  return (
<div>
<h3 style={{marginBottom:"40px",color:"blue",backgroundColor:"white",width:"max-content",margin:"0 auto", marginBottom:"30px",padding:"8px",marginTop:"50px"}}>ADD STUDENT</h3>
    <Base>
      <div>
        <div style={{display:"flex",flexDirection:"column", width:"60%",margin:"0 auto"}}> 
          
        {/* Name Input */}
        <input
          style={{marginBottom:"20px", borderRadius:"10px",height:"2rem",padding:"5px"}}
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        {/* Gender Input */}
        <input
          style={{marginBottom:"20px", borderRadius:"10px",height:"2rem",padding:"5px"}}
          type="text"
          placeholder="Enter Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)} />
        {/* Sub1 Input */}
        <input
          style={{marginBottom:"20px", borderRadius:"10px",height:"2rem",padding:"5px"}}
          type="number"
          placeholder="Enter ENGLISH MARK"
          value={sub1}
          onChange={(e) => setSub1(e.target.value)} />
        {/* Sub2 Input */}
        <input
          style={{marginBottom:"20px", borderRadius:"10px",height:"2rem",padding:"5px"}}
          type="number"
          placeholder="Enter MATHS MARK"
          value={sub2}
          onChange={(e) => setSub2(e.target.value)} />
        {/* Sub3 Input */}
        <input
          style={{marginBottom:"20px", borderRadius:"10px",height:"2rem",padding:"5px"}}
          type="number"
          placeholder="Enter PHYSICS"
          value={sub3}
          onChange={(e) => setSub3(e.target.value)} />{" "}
          </div>
        <button type="button" className="btn btn-success my-3" onClick={addStudent}>
          ADD STUDENT
        </button>
      </div>
    </Base>
</div>

  );
}


export default AddStud