
export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type ToolID = 
  | 'img-conv' | 'img-comp' | 'img-crop' | 'vid-conv' | 'aud-conv'
  | 'aud-trim' | 'age-calc' | 'emi-calc' | 'sip-calc' | 'qr-gen'
  | 'pass-gen' | 'word-count' | 'b64' | 'color-pick' | 'tts'
  | 'stt' | 'json-form' | 'unit-conv' | 'bmi-calc' | 'timer';
