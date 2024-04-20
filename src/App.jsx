import { Box, Container } from "@mui/material";
import DrawerAppBar from "./components/appBar";
import ButtonAppBar from "./components/appBar";
import Layout from "./components/layout";


function App() {
  return <>
    <Layout>
      <Container maxWidth="xl">
        <Box display={{ sm: "column", md: "flex" }} gap={{ sm: "6px", md: "20px" }} width={{ sm: "100%", md: "100%" }} padding={3} >
          <Box bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "60%" }} height={450} >
            <img src="https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.webp?b=1&s=170667a&w=0&k=20&c=nLf9fDcHVLZ9bPijP5QQrj0apVLdPXITVF6EAMqj1rg=" alt="" style={{ width: "100%", height: "100%" }} />
          </Box>
          <Box bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "35%" }} height={450} marginTop={{ sm: "20%", md: 0 }}>
            <Box paddingLeft={'25px'}>
              <h2>The circle's pristine<br/>cleanliness</h2>
              <Box display={"flex"} gap={1}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "8px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p>Tung Tran</p>
              </Box>
              <Box display={'flex'} gap={14} >
                <Box>
                  <p style={{marginBottom: "-10px"}}>Current Bid</p>
                  <h3 style={{marginBottom: "-10px"}}>0.85 ETH</h3>
                  <p style={{color: "GrayText"}}>$2,169.42</p>
                </Box>
                <Box>
                  <p style={{marginBottom: "-10px"}}>Auction ends in</p>
                  <Box display={"flex"} gap={8}>
                    <h3 style={{marginBottom: "-10px"}}>3</h3>
                    <h3 style={{marginBottom: "-10px"}}>16</h3>
                    <h3 style={{marginBottom: "-10px"}}>58</h3>
                  </Box>
                  <Box display={"flex"} gap={4}>
                    <p style={{color: "GrayText"}}>Hours</p>
                    <p style={{color: "GrayText"}}>Minutes</p>
                    <p style={{color: "GrayText"}}>Seconds</p>
                  </Box>
                </Box> 
              </Box>
              {/* <button style={{backgroundColor: "blue", border: "none", width: "200px"}}>Place a bid</button> */}
              
            </Box>
          </Box>
        </Box>
        <Box display={{ md: "flex", sm: "block" }} gap={"40px"} padding={3} >
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
        </Box>
        <Box display={{ md: "flex", sm: "block" }} gap={"40px"} padding={3} >
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
        </Box>
        <Box display={{ md: "flex", sm: "block" }} gap={"40px"} padding={3} >
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
          <Box display="block" bgcolor={"#fff"} boxShadow={3} width={{ sm: "100%", md: "312px" }} height={"auto"} borderRadius={"20px"} >
            <img
              width={"100%"}
              height={"200vh"}
              src="https://media.istockphoto.com/id/1304522945/photo/many-different-berries-in-the-form-of-a-frame-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=Sk74y7QIN1XWDPvHc_mXhYdmTr4mBmgLxJN9iwmAxHc="
              alt=""
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h3 style={{ marginLeft: "10px" }}>3D Soft Curwes</h3>
            <p style={{ marginRight: "20px", marginBottom: "-10px", marginTop: "60px", fontSize: "13px", color: "GrayText", textAlign: "end"} }>Current Bid</p>
            <Box display={"flex"} gap={2} marginLeft={'10px'}>
                <img style={{width: "30px", height: "30px", borderRadius: "100%", marginTop: "14px"}} src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" alt="" />
                <p style={{paddingTop: "5px"}}>Tung Tran</p>
                <h3 style={{paddingLeft: "50px"}}>0.85 ETH</h3>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout >
  </>
}




export default App;