import React from 'react';
import {
TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Sound from 'react-native-sound'


const App = () => {

var audio;


  return (
  <View style={{flex:1,flexDirection:'column'}}>
      <View>
         <TouchableOpacity
         onPress={()=>{
          audio= new Sound('https://eliasmovies.s3-eu-west-1.amazonaws.com/bienvenido_audio.mp3', Sound.MAIN_BUNDLE,(error)=>{
            if(error){
              console.log('failed to load the sound', error);
              return;
            }
       // console.log('duration in seconds: ' + audio.getDuration());

            // Play the sound with an onEnd callback
            audio.play((success) => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          })
         }}
         >
          <Text style={styles.playButton}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            audio.stop();
           }}
          >
          <Text style={styles.stopButton}>Stoop</Text>
          </TouchableOpacity>

      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  playButton:{
    fontSize:16,
    color:'white',
    backgroundColor:'black',
    paddingVertical:7

  },
  stopButton:{
    fontSize:16,
    color:'white',
    backgroundColor:'black',
    paddingVertical:7
  }

  
});

export default App;
