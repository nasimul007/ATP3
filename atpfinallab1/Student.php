

<?php
	require('Course.php');

	class Student
	{
		public $studentName;
		public $balance = 50000;
		public $courseList = array();

		function __construct($studentName){
			$this->studentName = $studentName;
		}

		public function addCourse($course){
			$this->courseList = $course->courseName;
			$course->addStudent($this->studentName);
		}
		public function dropCourse($courseName){
			if (($key = array_search($courseName, $this->courseList)) !== false) {
    			unset($this->courseList[$key]);
			}
		}

		public function allCourse(){
			for ($i=0 ; $i < count($this->courseList) ; $i++ ) { 
				if (isset($this->courseList[$i])) {
					echo $this->courseList[$i];
					echo "<br>";
				}
				else{
					$this->courseList[$i] = null;
				}
			}
		}
	}

	$php 	= new Course('PHP');
	$java 	= new Course('JAVA');
	$c 		= new Course('C');

	$php->addStudent('abc');
	$php->addStudent('xyz');
	$php->addStudent('efg');

	$studentOne 	= new Student('Nirjon');
	$studentTwo 	= new Student('Titly');
	$studentThree 	= new Student('Shanto');

	$studentOne->addCourse($php);

	echo $studentOne->name();