const experiments = [
    {
  '_id':'1',
  'Objective':' INTRODUCTION TO  JFLAP',
  'Intro':'JFLAP program makes it possible to create and simulate automata.',
  'Requirement': 'JFLAP version 7.0 or higher.',
  'heading1':'What is j-flap?',
  'paragraph1': 'JFLAP program makes it possible to create and simulate automata. Learning about automata with pen and paper can be difficult, time consuming and error-prone. With JFLAP we can create automata of different types and it is easy to change them as we want. JFLAP supports creation of DFA and NFA, Regular Expressions, PDA, Turing Machines, Grammars and more.',
  'heading2': 'Setup',
  'paragraph2':'JFLAP is available from the homepage: (www.JFLAP.org). From  there  press  “Get FLAP” and  follow the instructions. You will notice that JFLAP have a .JAR extension. This means that you need Java to  run JFLAP. With Java correctly installed you can simply select the program  to run it. You can also use   a command console run it from the files current directory with, Java –jar JFLAP.jar.',
  'heading3':'Using JFLAP',
  'paragraph3':'When you first start JFLAP you will see a small menu with a selection of eleven different automata and rule sets. Choosing one of them will open the editor where you create chosen  type  of automata.  Usually you can create automata containing states and transitions but there is also  creation  of  Grammar and Regular Expression which is made with a text editor.',
},
{
    '_id':'2',
    'Objective':'Working With DFA', 
    'Intro' :'The simplest type to begin with is Finite Automata ,JFLAP both DFA and NFA are created using Finite Automata.',
    'Requirement': ' Prior knowledge of Deterministic Finite Automata (DFA)',
    'paragraph1': 'The simplest type to begin with is Finite Automata, which is the first option from the selection menu. In JFLAP both DFA and NFA are created using Finite Automata. Now you should have an empty window in front of you. You will have a couple of tools and features at your disposal.The toolbar contains six tools, which are used to edit automata.',
    'numReview': 125,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '
  
  },
  {
    '_id':'3',
    'Objective':' WORKING WITH NFA	',
    'Intro':' NFA  can  have  lambda transitions  (transitions on an empty string) or several transitions from the same state with the same symbol',
    'Requirement': 10,
    'rating': 4.5,
    'numReview': 12,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '
  
  },
  {
    '_id':'4',
    'Objective':' CONVERSION OF NDFA TO DFA', 
    'Intro': 'Converting NFA to DFA , You can use JFLAP to convert NFA to DFA .table-borderedhe following automaton can easily be changed to a DFA.',
  
    'Requirement': ' Prior knowledge of Non-Deterministic Finite Automata (NDFA) & DFA',
    'rating': 4.5,
    'numReview': 121,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '
  
  },
  {
    '_id':'5',
    'Objective':'WORKING WITH REGULAR EXPRESSIONS',
    'Intro': 'Regular Expressions can be typed into JFLAP to be converted to an NFA.',
    'Requirement': ' Prior knowledge of Regular Expressions.',
    'rating': 4.5,
    'numReview': 15,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '
  
  },
  {
    '_id':'6',
    'Objective':'CONVERSION OF FA TO REGULAR EXPRESSION', 
    'Intro': 'To make the conversion work, empty transitions must be  added between states that have yet no transition.', 
    'Requirement': 'Prior knowledge of Regular Expressions and FSM',
    'rating': 4.5,
    'numReview': 13,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '

  },
  {
    '_id':'7',
    'Objective':'CONVERSION OF FA TO REGULAR GRAMMAR',
    'Intro':'When using a Finite Automaton select Convert → Convert to Grammar. The conversion  view  will contain your automata on the left and the grammar on the right. ',
    'Requirement': 10,
    'rating': 4.5,
    'numReview': 13,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '

  },
  {
    '_id':'8',
    'Objective':'WORKING WITH PUSHDOWN AUTOMATA', 
    'Intro':'Creating PDA in JFLAP is just as easy as creating FA .First you select “Pushdown Automaton” in the selection menu which also shows up when selecting in File.',
    'Requirement': ' Prior knowledge of Regular Grammar and FSM.',
    'rating': 4.5,
    'numReview': 13,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '

  },
  {
    '_id':'9',
    'Objective':'WORKING WITH CONTEXT FREE GRAMMAR & CONVERSION OF PUSHDOWN AUTOMATA TO CONTEXT FREE GRAMMAR', 
    'Intro':'Grammar is created using a table in JFLAP. If you choose grammar as a new project in JFLAP you will have a table where you can edit the grammar.',
    'Requirement':' Prior knowledge of Pushdown Automata',
    'rating': 4.5,
    'numReview': 13,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '

  },
  {
    '_id':'10',
    'Objective':'WORKING WITH TURING MACHINE', 
    'Intro':'A Turing machine uses a tape that can be written to and removed from by the head.For every transition there are three variables to set. First one is what value is expected to be under the head. Second is if the first is correct what should be written under the head . Third and last is the direction the head should take, the head can go left, right or stay.',
    'Requirement': '',
    'rating': 4.5,
    'numReview': 13,
    'descriptions':'Bluetooth technology lets you conntct it with compatible device '

  },


]

export default experiments 