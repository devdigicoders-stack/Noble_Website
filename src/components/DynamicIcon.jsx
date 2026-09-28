import React from 'react';
import { 
  Sparkles, Home, Heart, Users, Paintbrush, Palette, 
  SprayCan, Layers, ShieldCheck, Shield, Award, Clock, 
  HeartHandshake, UserCheck, Smile, Lock 
} from 'lucide-react';

export const DynamicIcon = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Paintbrush': return <Paintbrush className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'SprayCan': return <SprayCan className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Smile': return <Smile className={className} />;
    case 'Lock': return <Lock className={className} />;
    default: return <Sparkles className={className} />;
  }
};
