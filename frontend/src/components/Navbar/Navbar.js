import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const logout = () => {
    dispatch({type: "LOGOUT" })
    navigate("/")
    setUser(null)
  }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("profile")))
  },[location])
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src="assest/memories.png" alt="memories" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} src={user.picture} alt={user.name}>{user.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar 