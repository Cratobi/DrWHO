<?php
class Doctor
{
    // Database
    private $conn;
    private $table = 'doctors';

    public $ssn;
    public $license_number;
    public $location;
    public $visiting_fee;
    public $graduated_college;
    public $specialised;
    // public $visiting_fee;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function fetch()
    {
        $query = 'SELECT
                  t.ssn,
                  t.license_number,
                  u.name,
                  t.location,
                  t.specialised,
                  t.graduated_college
                  -- t.visiting_rate
                FROM
                  ' . $this->table . ' t
                LEFT JOIN
                  users u ON t.ssn = u.ssn';


        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    public function create()
    {
        $query = 'INSERT INTO ' . $this->table . '
                  SET
                    ssn = :ssn,
                    license_number = :license_number,
                    location = :location,
                    visiting_fee = :visiting_fee,
                    graduated_college = :graduated_college,
                    specialised = :specialised';


        $stmt = $this->conn->prepare($query);

        // Sanitizer
        $this->ssn = htmlspecialchars(strip_tags($this->ssn));
        $this->license_number = htmlspecialchars(strip_tags($this->license_number));
        $this->location = htmlspecialchars(strip_tags($this->location));
        $this->visiting_fee = htmlspecialchars(strip_tags($this->visiting_fee));
        $this->graduated_college = htmlspecialchars(strip_tags($this->graduated_college));
        $this->specialised = htmlspecialchars(strip_tags($this->specialised));

        // Bind data
        $stmt->bindParam(':ssn', $this->ssn);
        $stmt->bindParam(':license_number', $this->license_number);
        $stmt->bindParam(':location', $this->location);
        $stmt->bindParam(':visiting_fee', $this->visiting_fee);
        $stmt->bindParam(':graduated_college', $this->graduated_college);
        $stmt->bindParam(':specialised', $this->specialised);

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
