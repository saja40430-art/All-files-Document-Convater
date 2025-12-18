
import React from 'react';
import { ToolID } from '../types';
import * as ToolComponents from './tools';

interface ToolRendererProps {
  toolId: ToolID;
}

const ToolRenderer: React.FC<ToolRendererProps> = ({ toolId }) => {
  switch (toolId) {
    case 'blogger-ai': return <ToolComponents.AIBlogger />;
    case 'img-conv': return <ToolComponents.ImageConverter />;
    case 'img-comp': return <ToolComponents.ImageCompressor />;
    case 'img-crop': return <ToolComponents.ImageCropper />;
    case 'vid-conv': return <ToolComponents.VideoConverter />;
    case 'aud-conv': return <ToolComponents.AudioConverter />;
    case 'aud-trim': return <ToolComponents.AudioTrimmer />;
    case 'age-calc': return <ToolComponents.AgeCalculator />;
    case 'emi-calc': return <ToolComponents.EMICalculator />;
    case 'sip-calc': return <ToolComponents.SIPCalculator />;
    case 'qr-gen': return <ToolComponents.QRGenerator />;
    case 'pass-gen': return <ToolComponents.PasswordGenerator />;
    case 'word-count': return <ToolComponents.WordCounter />;
    case 'b64': return <ToolComponents.Base64Tool />;
    case 'color-pick': return <ToolComponents.ColorPicker />;
    case 'tts': return <ToolComponents.TextToSpeech />;
    case 'stt': return <ToolComponents.SpeechToText />;
    case 'json-form': return <ToolComponents.JSONFormatter />;
    case 'unit-conv': return <ToolComponents.UnitConverter />;
    case 'bmi-calc': return <ToolComponents.BMICalculator />;
    case 'timer': return <ToolComponents.TimerStopwatch />;
    default: return <div className="text-center py-10">Tool is under development...</div>;
  }
};

export default ToolRenderer;
