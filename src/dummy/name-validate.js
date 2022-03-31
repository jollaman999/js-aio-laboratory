export const DNS_1123_LABEL = {
  GOOD_VALUE: ['a', 'ab', 'abc', 'a1', 'a-1', 'a--1--2--b',
    '0', '01', '012', '1a', '1-a', '1--a--b--2'],
  BAD_VALUE: ['', 'A', 'ABC', 'aBc', 'A1', 'A-1', '1-A',
    '-', 'a-', '-a', '1-', '-1',
    '_', 'a_', '_a', 'a_b', '1_', '_1', '1_2',
    '.', 'a.', '.a', 'a.b', '1.', '.1', '1.2',
    ' ', 'a ', ' a', 'a b', '1 ', ' 1', '1 2'],
};

export const DNS_1123_SUBDOMAIN = {
  GOOD_VALUE: ['a', 'ab', 'abc', 'a1', 'a-1', 'a--1--2--b',
    '0', '01', '012', '1a', '1-a', '1--a--b--2',
    'a.a', 'ab.a', 'abc.a', 'a1.a', 'a-1.a', 'a--1--2--b.a',
    'a.1', 'ab.1', 'abc.1', 'a1.1', 'a-1.1', 'a--1--2--b.1',
    '0.a', '01.a', '012.a', '1a.a', '1-a.a', '1--a--b--2',
    '0.1', '01.1', '012.1', '1a.1', '1-a.1', '1--a--b--2.1',
    'a.b.c.d.e', 'aa.bb.cc.dd.ee', '1.2.3.4.5', '11.22.33.44.55'],
  BAD_VALUE: ['', 'A', 'ABC', 'aBc', 'A1', 'A-1', '1-A',
    '-', 'a-', '-a', '1-', '-1',
    '_', 'a_', '_a', 'a_b', '1_', '_1', '1_2',
    '.', 'a.', '.a', 'a..b', '1.', '.1', '1..2',
    ' ', 'a ', ' a', 'a b', '1 ', ' 1', '1 2',
    'A.a', 'aB.a', 'ab.A', 'A1.a', 'a1.A',
    'A.1', 'aB.1', 'A1.1', '1A.1',
    '0.A', '01.A', '012.A', '1A.a', '1a.A',
    'A.B.C.D.E', 'AA.BB.CC.DD.EE', 'a.B.c.d.e', 'aa.bB.cc.dd.ee',
    'a@b', 'a,b', 'a_b', 'a;b',
    'a:b', 'a%b', 'a?b', 'a$b'],
};