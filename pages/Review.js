import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [hasAudioPerssion, setHasAudioPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [status, setStatus] = useState(false)
  const cameraRef = useRef();
  const video = React.useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      const { audioStatus } = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus === 'granted');
    })();
  }, []);
  const onCameraReady = () => {
    setIsCameraReady(true);
  };
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture", source);
      }
    }
  };
  const recordVideo = async () => {
    setOpenCamera(true);
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log("video source", source);
            setVideoSource(source);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };
  const stopVideoRecording = () => {
    setOpenCamera(false);
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
    }
  };
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  const cancelPreview = async () => {
    console.log(cameraRef.current)
    if (cameraRef && cameraRef?.current) {
      await cameraRef.current.resumePreview();

    }
    setIsPreview(false);
    setVideoSource(null);
  };
  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      />
    </TouchableOpacity>
  );
  const renderVideoPlayer = () => (
    <>
      <Video
        ref={video}
        source={{ uri: videoSource }}
        shouldPlay={false}
        style={styles.media}
        controls={true}
        onPlaybackStatusUpdate={status => setStatus(() => status)}

      />

    </>
  );
  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Recording..."}</Text>
    </View>
  );
  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onLongPress={recordVideo}
        onPressOut={stopVideoRecording}
        onPress={takePicture}
        style={styles.capture}
      />
    </View>
  );
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }
  const navigation = useNavigation();
  const submit = ()=>{
    navigation.navigate('Loyalty Points',{videoUpload:20,index:2});
  }
  return (
    <SafeAreaView style={styles.container}>
      {openCamera ?
        <Camera
          ref={cameraRef}
          style={styles.container}
          type={cameraType}
          flashMode={Camera.Constants.FlashMode.on}
          onCameraReady={openCamera && onCameraReady}
          onMountError={(error) => {
            console.log("camera error", error);
          }}
        />
        : null}
        
      <View style={{
        width: "100%",
        height: openCamera? "100%" : "100%"
      }}>
        {isVideoRecording && !videoSource && renderVideoRecordIndicator()}
        {videoSource && renderVideoPlayer()}
        {isPreview && renderCancelPreviewButton()}
        {/* {!videoSource && !isPreview && renderCaptureControl()} */}
      </View>

      <View style={{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        alignContent: 'center',
        position:'absolute',
        bottom:100,
        left:80,
        right:80
        
      }}>
        {openCamera && !isVideoRecording ?
         <TouchableOpacity onPress={() => switchCamera()}>
         <MaterialCommunityIcons name="camera-flip" style={{color:'lightblue'}} size={30}/>
       </TouchableOpacity>
        
        : null}
        {
          !isVideoRecording && !isPreview && !openCamera ?
          <Button title={openCamera ? "Take video" : "Open Camera"} onPress={() => recordVideo()} />
          :null
        }

        {
          openCamera && !isVideoRecording && !isPreview ?
          <TouchableOpacity onPress={() => recordVideo()}>
            <MaterialCommunityIcons name="record" style={{color:'lightblue'}} size={50}/>
          </TouchableOpacity>
          :null
        }
      
        {/* <TouchableOpacity>
          <MaterialCommunityIcons name="record" style={{color:'lightblue'}} size={50}/>
        </TouchableOpacity> */}
        {openCamera ? 
        <TouchableOpacity  onPress={() => stopVideoRecording()}>
          <AntDesign name="closecircleo" style={{color:'red'}} size={20}/>
        </TouchableOpacity>
        :null
        }
        {/* {openCamera ? <Button title="Stop Video" onPress={() => stopVideoRecording()} /> : null} */}
        {isPreview ? 
          // <Button
          // title={status.isPlaying ? 'Pause' : 'Play'}
          // onPress={() =>
          //   status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          // } /> 

          <TouchableOpacity  onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }>
          <MaterialCommunityIcons name={status.isPlaying ? "stop-circle-outline": "play-circle"} 
            style={{color:status.isPlaying ? 'red' : 'lightblue'}} size={50}/>
          </TouchableOpacity>
          
          : null
        }


        {isPreview ? 
        <TouchableOpacity  onPress={() => cancelPreview()}>
          
        </TouchableOpacity>
        : null}
        {
          isPreview?
          <TouchableOpacity onPress={()=>submit()}>
          <AntDesign name="checkcircle" style={{color:'green'}} size={50}/>
          </TouchableOpacity>
          :null
        }
      </View>
    </SafeAreaView>
  );
}
export default Review;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill
  },
  closeButton: {
    position: "absolute",
    top: 35,
    left: 15,
    height: closeButtonSize,
    width: closeButtonSize,
    borderRadius: Math.floor(closeButtonSize / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
  media: {
    ...StyleSheet.absoluteFill,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});