import React from 'react'
// import json from './sample/sttGoogle.json'
import jsonSlate from './sample/slateExample.json'
import SlateTranscriptEditor from 'slate-transcript-editor'
import 'bootstrap-css-only';
import video from './sample/video.mp4'
import { TranscriptStyled } from './app.style'

function App() {
 // const [transcriptData, ] = useState(json)
  return (
    <TranscriptStyled>
      <SlateTranscriptEditor
        mediaUrl={video}
        transcriptData={jsonSlate}
        isEditable= {true}
        showTimecodes={true}
        showSpeakers={false}
      />
    </TranscriptStyled>
    // <>
    //   <TranscriptStyled>
    //     <TranscriptEditor
    //     mediaUrl={'https://download.ted.com/talks/KateDarling_2018S-950k.mp4'}
    //     transcriptData={json}
    //     isEditable= {true}
    //     sttJsonType= {'google-stt'}
    //     />
    //   </TranscriptStyled>
    // </>
  );
}

export default App;
