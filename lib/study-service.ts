import { supabase } from './supabase';

export const logStudySession = async (userId: string, subject: string, minutes: number) => {
    const { data, error } = await supabase
      .from('study_sessions')
      .insert([{
        user_id: userId,
        subject: subject,
        duration_minutes: minutes
      }])
    
    if (error) throw error;
    return data;
};