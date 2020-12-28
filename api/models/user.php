<?php
class User
{
  // Database
  private $conn;
  private $table = 'users';

  public $name;
  public $email;
  public $bloodgroup;
  public $phone_number;
  public $password;
  public $dateofbirth;

  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function fetch()
  {
    $query = 'SELECT
                  t.name,
                  t.email,
                  t.bloodgroup,
                  t.phone_number,
                  t.password,
                  t.dateofbirth
                FROM
                  ' . $this->table . ' t';


    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }
  public function fetch_one()
  {
    $query = 'SELECT
                      t.ssn,
                      t.name,
                      t.email,
                      t.bloodgroup,
                      t.phone_number,
                      t.password,
                      t.dateofbirth
                    FROM
                      ' . $this->table . ' t
                    WHERE
                          t.email = "' . $this->email . '"
                    LIMIT 0,1';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->ssn);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // Set properties
    $this->ssn = $row['ssn'];
    $this->name = $row['name'];
    $this->email = $row['email'];
    $this->bloodgroup = $row['bloodgroup'];
    $this->phone_number = $row['phone_number'];
    $this->password = $row['password'];
    $this->dateofbirth = $row['dateofbirth'];

    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }


  public function create()
  {
    $query = 'INSERT INTO users
                  SET
                    name = :name,
                    email = :email,
                    bloodgroup = :bloodgroup,
                    phone_number = :phone_number,
                    password = :password,
                    dateofbirth = :dateofbirth';

    $stmt = $this->conn->prepare($query);

    // Sanitizer
    $this->name = htmlspecialchars(strip_tags($this->name));
    $this->email = htmlspecialchars(strip_tags($this->email));
    $this->bloodgroup = htmlspecialchars(strip_tags($this->bloodgroup));
    $this->phone_number = htmlspecialchars(strip_tags($this->phone_number));
    $this->password = htmlspecialchars(strip_tags($this->password));
    $this->dateofbirth = htmlspecialchars(strip_tags($this->dateofbirth));

    // Bind data
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':bloodgroup', $this->bloodgroup);
    $stmt->bindParam(':phone_number', $this->phone_number);
    $stmt->bindParam(':password', $this->password);
    $stmt->bindParam(':dateofbirth', $this->dateofbirth);

    if ($stmt->execute()) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }

  public function update()
  {
    $query = 'UPDATE
                    ssn = :ssn,
                    license_number = :license_number,
                    location = :location,
                    specialised = :specialised,
                    graduated_college = :graduated_college
                    -- t.visiting_fee
                  WHERE
                    SSN = :SSN';


    $stmt = $this->conn->prepare($query);

    // Sanitizer
    $this->ssn = htmlspecialchars(strip_tags($this->ssn));
    $this->license_number = htmlspecialchars(strip_tags($this->license_number));
    $this->specialised = htmlspecialchars(strip_tags($this->specialised));
    $this->location = htmlspecialchars(strip_tags($this->location));
    $this->graduated_college = htmlspecialchars(strip_tags($this->graduated_college));
    // $this->visiting_fee = htmlspecialchars(strip_tags($this->visiting_fee));

    // Bind data
    $stmt->bindParam(':ssn', $this->ssn);
    $stmt->bindParam(':license_number', $this->license_number);
    $stmt->bindParam(':specialised', $this->specialised);
    $stmt->bindParam(':location', $this->location);
    $stmt->bindParam(':graduated_college', $this->graduated_college);
    // $stmt->bindParam(':visiting_fee', $this->visiting_fee);

    if ($stmt->execute()) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }

  public function delete()
  {
    $query = 'DELETE FROM ' . $this->table . '
                    WHERE
                      ssn = :ssn';

    $stmt = $this->conn->prepare($query);

    // Sanitizer
    $this->ssn = htmlspecialchars(strip_tags($this->ssn));

    // Bind data
    $stmt->bindParam(':ssn', $this->ssn);

    if ($stmt->execute()) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }
}