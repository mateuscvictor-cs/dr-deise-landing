CREATE TABLE IF NOT EXISTS public.gia_quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  q1 text NOT NULL CHECK (q1 IN ('A', 'B', 'C')),
  q2 text NOT NULL CHECK (q2 IN ('A', 'B', 'C')),
  q3 text NOT NULL CHECK (q3 IN ('A', 'B', 'C')),
  q4 text NOT NULL CHECK (q4 IN ('A', 'B', 'C')),
  q5 text NOT NULL CHECK (q5 IN ('A', 'B', 'C')),
  q6 text NOT NULL CHECK (q6 IN ('A', 'B', 'C')),
  q7 text NOT NULL CHECK (q7 IN ('A', 'B', 'C')),
  q8 text NOT NULL CHECK (q8 IN ('A', 'B', 'C')),
  q9 text NOT NULL CHECK (q9 IN ('A', 'B', 'C')),
  score_g smallint NOT NULL CHECK (score_g >= 0 AND score_g <= 40),
  score_i smallint NOT NULL CHECK (score_i >= 0 AND score_i <= 20),
  score_a smallint NOT NULL CHECK (score_a >= 0 AND score_a <= 40),
  score_total smallint NOT NULL CHECK (score_total >= 0 AND score_total <= 100),
  nivel text NOT NULL CHECK (nivel IN ('risco', 'transicao', 'crescimento', 'estruturado')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.gia_quiz_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert for anon or service"
  ON public.gia_quiz_results
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow select for service only"
  ON public.gia_quiz_results
  FOR SELECT
  USING (true);
