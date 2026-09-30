-- ==========================================================
-- ACADEMIC DIGITAL BINDER - SUPABASE POSTGRESQL SCHEMA
-- Standard: Clean Architecture, Enterprise RLS, Full Storage
-- ==========================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Profiles Table (Tied to Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  university TEXT DEFAULT 'Universitas Indraprasta PGRI (Unindra)',
  major TEXT DEFAULT 'Teknik Informatika / Sistem Informasi',
  class_code TEXT DEFAULT 'R1G',
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Semesters Table
CREATE TABLE IF NOT EXISTS public.semesters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- e.g. "Semester 1"
  academic_year TEXT DEFAULT '2026/2027',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Subjects Table (Mata Kuliah)
CREATE TABLE IF NOT EXISTS public.subjects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  semester_id UUID REFERENCES public.semesters(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- e.g. "Konsep Sistem Informasi"
  code TEXT, -- e.g. "MKWK107"
  lecturer TEXT, -- e.g. "Pak Dheni, M.Kom."
  schedule TEXT, -- e.g. "Senin • 07:30 - 10:00 WIB"
  room TEXT, -- e.g. "Ruang R.4.4-4"
  color TEXT DEFAULT '#6366F1',
  target_meetings INT DEFAULT 16,
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Meetings Table (Pertemuan Kuliah)
CREATE TABLE IF NOT EXISTS public.meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  meeting_number INT NOT NULL, -- 1, 2, 3, 4, ... (Dinamis tanpa batas)
  date DATE DEFAULT CURRENT_DATE,
  title TEXT NOT NULL, -- e.g. "Konsep Dasar Data & Informasi"
  description TEXT,
  notes TEXT, -- Catatan pribadi tambahan mahasiswa
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Materials Table (Source Material: File / Link / Dokumen / Audio / Video)
CREATE TABLE IF NOT EXISTS public.materials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID NOT NULL REFERENCES public.meetings(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('pdf', 'ppt', 'pptx', 'doc', 'docx', 'txt', 'audio', 'video', 'link')),
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_path TEXT, -- Storage bucket object key: user_id/semester_id/subject_id/meeting_id/...
  file_size BIGINT, -- Bytes
  mime_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Transcripts Table (Hasil transkripsi rekaman audio/video dosen)
CREATE TABLE IF NOT EXISTS public.transcripts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID NOT NULL REFERENCES public.meetings(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  source_audio_url TEXT,
  language TEXT DEFAULT 'id',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Summaries Table (Rangkuman AI & Review Mahasiswa)
CREATE TABLE IF NOT EXISTS public.summaries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID NOT NULL REFERENCES public.meetings(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  mode TEXT NOT NULL DEFAULT 'standar' CHECK (mode IN ('ringkas', 'standar', 'detail')),
  content_html TEXT NOT NULL,
  content_markdown TEXT NOT NULL,
  handwriting_notes TEXT, -- Format terstruktur khusus Mode Catatan Fisik
  key_terms JSONB DEFAULT '[]'::jsonb, -- Array istilah penting & definisi
  exam_focus JSONB DEFAULT '[]'::jsonb, -- Kisi-kisi UTS/UAS
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Binder Progress Table (4 Status Pelacakan Catatan Buku Fisik)
CREATE TABLE IF NOT EXISTS public.binder_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID UNIQUE NOT NULL REFERENCES public.meetings(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  is_read BOOLEAN DEFAULT FALSE,          -- □ Sudah membaca
  is_summarized BOOLEAN DEFAULT FALSE,    -- □ Sudah dirangkum
  is_studied BOOLEAN DEFAULT FALSE,       -- □ Sudah dipelajari
  is_noted_in_binder BOOLEAN DEFAULT FALSE,-- □ Sudah dicatat ke buku fisik
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================================
-- INDEXING FOR ULTRA-FAST GLOBAL SEARCH & QUERIES
-- ==========================================================
CREATE INDEX IF NOT EXISTS idx_subjects_user ON public.subjects(user_id);
CREATE INDEX IF NOT EXISTS idx_meetings_subject ON public.meetings(subject_id);
CREATE INDEX IF NOT EXISTS idx_meetings_user ON public.meetings(user_id);
CREATE INDEX IF NOT EXISTS idx_materials_meeting ON public.materials(meeting_id);
CREATE INDEX IF NOT EXISTS idx_transcripts_meeting ON public.transcripts(meeting_id);
CREATE INDEX IF NOT EXISTS idx_summaries_meeting ON public.summaries(meeting_id);
CREATE INDEX IF NOT EXISTS idx_progress_meeting ON public.binder_progress(meeting_id);

-- ==========================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Strict Isolation: User hanya dapat membaca dan memodifikasi datanya sendiri
-- ==========================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.semesters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meetings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transcripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.binder_progress ENABLE ROW LEVEL SECURITY;

-- Helper RLS Macro for Tables with user_id
CREATE POLICY "Profiles are self accessible" ON public.profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Semesters are self accessible" ON public.semesters FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Subjects are self accessible" ON public.subjects FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Meetings are self accessible" ON public.meetings FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Materials are self accessible" ON public.materials FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Transcripts are self accessible" ON public.transcripts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Summaries are self accessible" ON public.summaries FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Binder Progress is self accessible" ON public.binder_progress FOR ALL USING (auth.uid() = user_id);

-- ==========================================================
-- AUTOMATIC PROFILE TRIGGER ON AUTH SIGNUP
-- ==========================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', 'Mahasiswa Unindra'));
  
  -- Create Default Active Semester
  INSERT INTO public.semesters (user_id, name, academic_year, is_active)
  VALUES (NEW.id, 'Semester 1', '2026/2027', TRUE);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ==========================================================
-- SUPABASE STORAGE BUCKET CONFIGURATION
-- Bucket: academic-materials (Private, RLS Enabled)
-- Max File Size: 100MB
-- Allowed Mime Types: PDF, PPT, PPTX, DOC, DOCX, TXT, MP3, M4A, WAV, MP4
-- ==========================================================
-- Note: Jalankan di Supabase Storage SQL Editor:
-- INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
-- VALUES (
--   'academic-materials',
--   'academic-materials',
--   FALSE,
--   104857600,
--   ARRAY[
--     'application/pdf',
--     'application/vnd.ms-powerpoint',
--     'application/vnd.openxmlformats-officedocument.presentationml.presentation',
--     'application/msword',
--     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
--     'text/plain',
--     'audio/mpeg',
--     'audio/mp4',
--     'audio/wav',
--     'audio/x-m4a',
--     'video/mp4'
--   ]
-- );
