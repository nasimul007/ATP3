

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

		public function addCourse($courseName){
			$this->courseList = $courseName;
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

	$studentOne 	= new Student('Nirjon');
	$studentTwo 	= new Student('Titly');
	$studentThree 	= new Student('Shanto');

	echo $studentOne->name();