<?php

	class Course 
	{
		public $courseName;
		public $studentList = array();

		function __construct($courseName){
			$this->courseName = $courseName;
		}

		public function addStudent($studentName){
			$this->studentList[] = $studentName;
		}

		public function dropStudent($studentName){
			// unset($this->studentList[$studentName]);
			if (($key = array_search($studentName, $this->studentList)) !== false) {
    			unset($this->studentList[$key]);
			}
		}

		public function allStudent(){
			for ($i=0 ; $i < count($this->studentList) ; $i++ ) { 
				if (isset($this->studentList[$i])) {
					echo $this->studentList[$i];
					echo "<br>";
				}
				else{
					$this->studentList[$i] = null;
				}
			}
		}

	}

	/*$php 	= new Course('PHP');
	$java 	= new Course('JAVA');
	$c 		= new Course('C');

	$php->addStudent('abc');
	$php->addStudent('xyz');
	$php->addStudent('efg');

	

	echo $php->allStudent();
	echo "<br>";
	$php->dropStudent('xyz');
	echo $php->allStudent();*/
