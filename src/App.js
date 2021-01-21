import React, { useState } from 'react'
import json from './sample/KateDarling-bbcKaldiTranscriptWithSpeakerSegments.json'
import TranscriptEditor from "@bbc/react-transcript-editor";
import { TranscriptStyled } from './app.style'
function App() {
  const [transcriptData, ] = useState(json)
  const [mediaUrl, ] = useState('https://download.ted.com/talks/KateDarling_2018S-950k.mp4')
  return (
    <TranscriptStyled>
      <TranscriptEditor
        transcriptData = {transcriptData}
        mediaUrl={mediaUrl}
        sttJsonType= 'bbckaldi'
        isEditable={true}
        spellCheck={false}
        handleAutoSaveChanges={()=> {console.log('saved');}}
        autoSaveContentType={"digitalpaperedit"}
        />
    </TranscriptStyled>
  );
}

export default App;
