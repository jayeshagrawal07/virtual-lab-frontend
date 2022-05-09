import { TYPES } from './constants/userConstants';

// use <br> for line break

const experiments = [
	{
		_id: '1',
		Objective: ' INTRODUCTION TO  JFLAP',
		Intro: 'JFLAP program makes it possible to create and simulate automata.',
		Requirement: 'JFLAP version 7.0 or higher.',
		heading1: 'What is j-flap?',
		paragraph1:
			'JFLAP program makes it possible to create and simulate automata. Learning about automata with pen and paper can be difficult, time consuming and error-prone. With JFLAP we can create automata of different types and it is easy to change them as we want. JFLAP supports creation of DFA and NFA, Regular Expressions, PDA, Turing Machines, Grammars and more.',
		heading2: 'Setup',
		paragraph2:
			'JFLAP is available from the homepage: (www.JFLAP.org). From  there  press  “Get FLAP” and  follow the instructions. You will notice that JFLAP have a .JAR extension. This means that you need Java to  run JFLAP. With Java correctly installed you can simply select the program  to run it. You can also use   a command console run it from the files current directory with, Java –jar JFLAP.jar.',
		heading3: 'Using JFLAP',
		paragraph3:
			'When you first start JFLAP you will see a small menu with a selection of eleven different automata and rule sets. Choosing one of them will open the editor where you create chosen  type  of automata.  Usually you can create automata containing states and transitions but there is also  creation  of  Grammar and Regular Expression which is made with a text editor.',
		simulation: null
	},
	{
		_id: '2',
		Objective: 'Working With DFA',
		Intro:
			'The simplest type to begin with is Finite Automata ,JFLAP both DFA and NFA are created using Finite Automata.',
		Requirement: ' Prior knowledge of Deterministic Finite Automata (DFA)',
		paragraph1:
			'The simplest type to begin with is Finite Automata, which is the first option from the selection menu. In JFLAP both DFA and NFA are created using Finite Automata. <br> Now you should have an empty window in front of you. You will have a couple of tools and features at your disposal. The toolbar contains six tools, which are used to edit automata.Attribute Editor Tool, changes properties and position of existing states and transitions. State Creator Tool, creates new states. Transition Creator Tool, creates transitions. Deletion Tool, deletes states and transitions. Undo/Redo, changes the selected object prior to their history.Creating an automaton is easy with the state and transition tools. Note that you need to change back to the Attribute Editor Tool (first) to change states. Let’s try to add states with the State Creator Tool (second).When adding states they automatically get a name assigned to them, which can be changed using the Attribute Editor Tool.',
		img1: '/images/exp2/exp2.1.JPG',

		img2: '/images/exp2/exp2.2.JPG',
		paragraph2:
			'Transitions are easily dragged between states with the Transition Creator Tool.The automaton above only accepts strings containing b which end with a. To test this automaton you  can use any of the available tools under the Input menu.The fastest in this case is to use Input → Fast Run. A  menu where you can set your input string pops  up. Type the string “bba” and select “OK”. The program shows all the transitions that are done when consuming the input string.If you want to test multiple inputs at once you can select the “Multiple Run” option.',
		paragraph3:
			'If you wish to individually review single runs, it can be accessed by selecting the View “Trace”, which gives a view similar to the “Fast Run” option.To debug the automata “Step by Closure” or “Step by State” can be selected. For each step the automaton highlights the currently active state.For “stepping” you press the “Step” button.The first character consumed. Notice that the first letter is grayed out and the currently active state    have changed.Now the last character is about to be consumed. This step shows the transition between q0 and q1. If there happen to be multiple paths with the same character you will see them grayed out.The simulator reached the final state. ',

		img3: '/images/exp2/exp2.3.JPG',

		simulation: TYPES.DFA
	},
	{
		_id: '3',
		Objective: ' WORKING WITH NFA	',
		Intro:
			' NFA  can  have  lambda transitions  (transitions on an empty string) or several transitions from the same state with the same symbol',
		Requirement: 'Prior knowledge of Non-Deterministic Finite Automata (NDFA)',
		heading1: 'NFA – Non=deterministic Finite Automaton',
		paragraph1:
			'Finite Automaton is either a DFA or an NFA. Unlike DFA, NFA  can  have  lambda  transitions  (transitions on an empty string) or several transitions from the same state with the same symbol (that     is non-determinism as we do not know which of the possible paths will be the next). The automaton below is an NFA because of the lambda transition from the q2 state.',
		heading2: 'Creating an NFA or a DFA proceeds in the same way in JFLAP.',
		img1: '/images/exp3/exp-3.png',
		heading3:
			'It is possible to let JFLAP determine if the automaton is a non-deterministic automaton. Select Test    then “Highlight Non-Determinism”. This simply shows that the q2 state is non-deterministic (because of lambda transition).',
		img2: '/images/exp3/exp.3-2.png',
		paragraph3: '',
		descriptions: 'Bluetooth technology lets you conntct it with compatible device ',
		simulation: TYPES.NDFA
	},
	{
		_id: '4',
		Objective: ' CONVERSION OF NDFA TO DFA',
		Intro:
			'Converting NFA to DFA , You can use JFLAP to convert NFA to DFA .table-borderedhe following automaton can easily be changed to a DFA.',
		Requirement: ' Prior knowledge of Non-Deterministic Finite Automata (NDFA) & DFA',
		heading1: 'Converting NFA to DFA',
		paragraph1:
			'As we have learned in the course, for each NFA there is a corresponding DFA. You can use JFLAP to convert NFA to DFA. The following automaton can easily be changed to a DFA.',
		img1: '/images/exp4/exp-4.1.png',
		paragraph3:
			'Create a NFA and then choose Convert → Convert to DFA. This will open the conversion view where you either let JFLAP do the work or try yourself to convert it. The left view is the original automaton     and the right one is the new DFA. Use the state expander tool to expand the states until the DFA is complete. Using the Complete button will automatically create the whole DFA for you. The Done?   button will tell if the DFA is done or not. Once the DFA is complete it will be exported to a new JFLAP window with your converted DFA.',
		img2: '/images/exp4/exp-4.2.png',
		descriptions: 'Bluetooth technology lets you conntct it with compatible device ',
		simulation: TYPES.NFA_DFA
	},

  {
		_id: '5',
		Objective: 'Working with Finite State Machine (Moore Machine)',
		Intro:
			'A moore machine is defined as a machine in theory of computation whose output values are determined only by its current state.',
		Requirement: 'Study the functionality of Moore machine.',
		paragraph1:
			'In the theory of computation, a Moore machine is a finite state machine where the outputs are determined by the current state alone (and do not depend directly on the input). The state diagram for a Moore machine will include an output signal for each state, Compared with a Mealy machine, which maps transitions in the machine to outputs.The advantage of the Moore model is a simplification of the behavior. <br> After completion of this experiment, students are able to design moore machine using Verilog code.',
		img1: '/images/exp8/exp8-1.jpg',
		img2: '/images/exp8/exp8-2.jpg',
		rating: 4.5,
		numReview: 13,
		descriptions: 'Bluetooth technology lets you conntct it with compatible device ',
		simulation: TYPES.MOORE
	},

	{
		_id: '6',
		Objective: 'Working with Finite State Machine (Mealy Machine)',
		Intro:
			'In the theory of computation, a Mealy machine is a finite-state machine whose output values are determined both by its current state and the current inputs. This is in contrast to a Moore machine, whose (Moore) output values are determined solely by its current state. A Mealy machine is a deterministic finite-state transducer: for each state and input, at most one transition is possible.',
		Requirement: 'Study the functionality of Mealy machine.',
		paragraph1:
			'The state diagram for a Mealy machine associates an output value with each transition edge, in contrast to the state diagram for a Moore machine, which associates an output value with each state. <br> When the input and output alphabet are both Σ, one can also associate to a Mealy Automata an Helix directed graph[clarification needed] (S × Σ, (x, i) → (T(x, i), G(x, i))).[2] This graph has as vertices the couples of state and letters, every nodes are of out-degree one, and the successor of (x, i) is the next state of the automata and the letter that the automata output when it is instate x and it reads letter i. This graph is a union of disjoint cycles if the automaton is bireversible.',
		img1: '/images/exp9/exp9-1.jpg',
		heading2: 'Mealy Machine –',
		paragraph2:
			'1. Output depends on present state as well as present input.<br>2. If input changes, output also changes. <br>3. Less number of states are required.<br> 4. There is less hardware requirement. <br>5. They react faster to inputs.<br> 6. Asynchronous output generation. <br>7. Output is placed on transitions. <br>8. It is difficult to design.',

		rating: 4.5,
		numReview: 13,
		descriptions: 'Bluetooth technology lets you conntct it with compatible device ',
		simulation: TYPES.MEALY
	},
	{
		_id: '7',
		Objective: 'WORKING WITH REGULAR EXPRESSIONS',
		Intro: 'Regular Expressions can be typed into JFLAP to be converted to an NFA.',
		Requirement: ' Prior knowledge of Regular Expressions.',
		heading1: 'REGULAR EXPRESSIONS',
		paragraph1: 'Regular Expressions can be typed into JFLAP to be converted to an NFA.',
		img1: '/images/exp5/exp-5.1.png',
		paragraph3:
			'Choose Regular Expression in the main menu, then just type the expression in the textbox. Definitions for Regular Expressions in JFLAP: ▪Kleene Star ▪Union ▪Empty String /n Correctly written expressions can then be converted to an NFA. To convert your expression select Convert → Convert to NFA. The conversion will begin with two states and a  transition  with  your Regular  Expression.  With  the  (D)e-expressionify  Transition  tool  you  can  break  down  the  Regular Expression into smaller parts. Each transition will contain a sub expression. The next step is to link every rule with lambda transitions. Add new  transition between states that should be connected with   the Transition Tool. If you are unsure what to do you can select Do Step to automatically make the     next step. If you want the NFA immediately Do All creates the whole NFA for you.',
		img2: '/images/exp5/exp-5.2.png',
		img3: '/images/exp5/exp-5.2.png',
		simulation: null
	},
	{
		_id: '8',
		Objective: 'CONVERSION OF FA TO REGULAR EXPRESSION',
		Intro:
			'To make the conversion work, empty transitions must be  added between states that have yet no transition.',
		Requirement: 'Prior knowledge of Regular Expressions and FSM',
		paragraph1:
			'Converting FA to Regular Expression <br> Follow the instructions above the toolbar. To make the conversion work, empty transitions must be  added between states that have yet no transition. States that either is Initial or Final must be removed which you do with the collapse state tool. With the collapse tool you can use the table to inspect combined transitions from that state. The state is removed with The Finalize button.',
		img1: '/images/exp6/exp6-1.jpg',
		img2: '/images/exp6/exp6-2.jpg',
		paragraph2:
			'When all the necessary steps are made, the  converted automaton  contains  the  regular expression. You can also see the complete regular expression above the toolbar that  can  be  exported  using  Export.',
		img3: '/images/exp6/exp6-3.jpg',
		rating: 4.5,
		numReview: 13,
		descriptions: 'Bluetooth technology lets you conntct it with compatible device ',
		simulation: null
	},
	{
		_id: '9',
		Objective: 'CONVERSION OF FA TO REGULAR GRAMMAR',
		Intro:
			'When using a Finite Automaton select Convert → Convert to Grammar. The conversion  view  will contain your automata on the left and the grammar on the right. ',
		Requirement: 'Prior knowledge of Regular Grammar and FSM.',
		paragraph1:
			'Converting FA to a Grammar <br> When using a Finite Automaton select Convert → Convert to Grammar. The conversion  view  will contain your automata on the left and the grammar on the right. You are free to edit the grammar  yourself or let JFLAP more or less do the work. <br> The “What’s Left?” option will show which transition that not have been used in the grammar yet. JFLAP automatically puts labels to states to tell which symbols they represent in the grammar.As mentioned you can either edit the right side grammar table or click on states to automatically reveal the grammar for each step. The  Hint  reveals which state you should select next. Show All automatically creates the grammar for you.<br> Once the grammar is complete you can select Export to open a new JFLAP window with your new Grammar, don’t forgot to save if you want your grammar saved.',
		img1: '/images/exp7/exp7-1.jpg',
		img2: '/images/exp7/exp7-2.jpg',
		rating: 4.5,
		numReview: 13,
		descriptions: 'Bluetooth technology lets you conntct it with compatible device ',
		simulation: null
	},



	{
		_id: '10',
		Objective: 'WORKING WITH TURING MACHINE',
		Intro:
			'A Turing machine uses a tape that can be written to and removed from by the head.For every transition there are three variables to set. First one is what value is expected to be under the head. Second is if the first is correct what should be written under the head . Third and last is the direction the head should take, the head can go left, right or stay.',
		Requirement: 'Prior knowledge of Turing Machine',
		heading1: 'Turing Machine',
		paragraph1:
			'A Turing machine uses a tape that can be written to and removed from by  the  head.  For every transition there are three variables to set. First one is what value is expected to be under the head. Second is if the first is correct what should be written under the head. Third and last is the direction the head should take, the head can go left (L), right (R) or stay (S). In JFLAP ⎕ is the blank symbol.    Create this Turing machine below, which duplicates the number of symbol 1 on the tape.',
		img1: '/images/exp10/exp-10-1.png',
		paragraph2:
			'When testing your Turing machine you can see the tape. Stepping trough will update the currently   active state and the tape content. In this example the tape starts with the string “1111”, where the TM steps trough and changes each 1 to an x. To know how many extra 1 to write, x will be used as a  symbol for each extra 1 to be written. The TM stops once the computation is done and the tape should contain the result with the head in its initial position',
		simulation: null
	}
];

export default experiments;
