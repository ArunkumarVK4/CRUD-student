import Base from "../Base/Base";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { Box } from "@mui/material";
import swal from "sweetalert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AppPro from "../UseContext/AppProvider";

// Students DashBoard Page Create

 function Student() {
  const { students, setStudents } = AppPro();

  const history = useHistory();

  // Delete Function
  function deleteStudent(index) {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this Data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Deleted!", "Your Data has been deleted.", "success");
        const remainingStudent = students.filter((e, idx) => idx !== index);
        setStudents(remainingStudent);
      } else {
        swal("Your Data is safe!");
      }
    });
  }
  return (
    <Base>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          {/* Card Details */}
          {students.map((e, idx) => (
            <div className="col-xl-3 col-sm-6" key={idx}>
              <Card sx={{ maxWidth: 200, margin: 5, backgroundColor: green }}>
                <CardContent sx={{ padding: 3, backgroundColor: "" }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'primary.main' }}
                  style={{fontFamily:"Arial, sans-serif;",fontWeight:"bold"}}
                  >
                    {e.name}
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary"
                  style={{fontFamily:"Arial, sans-serif;",fontWeight:"bold",marginBottom:"3px"}}
                  >
                    Gender: {e.gender}
                  </Typography>

                  <Typography variant="body2" color="text.secondary"
                    style={{fontFamily:"Arial, sans-serif;",fontWeight:"bold",marginBottom:"3px"}}
                  >
                    English : {e.english}
                  </Typography>

                  <Typography variant="body2" color="text.secondary"
                    style={{fontFamily:"Arial, sans-serif;",fontWeight:"bold",marginBottom:"3px"}}
                  >
                    Maths : {e.maths}
                  </Typography>

                  <Typography variant="body2" color="text.secondary"
                    style={{fontFamily:"Arial, sans-serif;",fontWeight:"bold",marginBottom:"3px"}}
                  >
                    physics : {e.physics}
                  </Typography>
                </CardContent>
                <hr />
                <CardActions>
                  <Box>
                    {/* Edit Button */}
                    <EditIcon
                      color="secondary"
                      onClick={() => history.push(`/editStudent/${idx}`)}
                      sx={{ paddingRight: "2px", marginLeft: "10px" }} />

                    {/* Delete Button */}
                    <DeleteIcon
                      color="error"
                      onClick={() => deleteStudent(idx)}
                      sx={{ paddingLeft: "2px", marginLeft: "100px" }} />
                  </Box>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}

export default Student
