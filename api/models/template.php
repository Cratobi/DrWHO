<?php
class __Template__
{
  // Database
  private $conn;
  private $table = '__table_name__';

  public $__col_1__;
  public $__col_2__;
  public $__col_3__;
  public $__col_4__;

  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function fetch()
  {
    $query = 'SELECT
                  t.__col_1__,
                  t.__col_2__,
                  t.__col_3__,
                  t.__col_4__
                FROM
                  ' . $this->table . ' t';
    // LEFT JOIN
    //   categories c ON t.category_id = c.id
    // ORDER BY
    //   t.created_at DESC';

    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }

  public function create()
  {
    $query = 'INSERT INTO ' . $this->table . ' SET
                      __col_1__ = :__col_1__,
                      __col_2__ = :__col_2__,
                      __col_3__ = :__col_3__,
                      __col_4__ = :__col_4__';

    $stmt = $this->conn->prepare($query);

    // Sanitizer
    $this->__col_1__ = htmlspecialchars(strip_tags($this->__col_1__));
    $this->__col_2__ = htmlspecialchars(strip_tags($this->__col_2__));
    $this->__col_3__ = htmlspecialchars(strip_tags($this->__col_3__));
    $this->__col_4__ = htmlspecialchars(strip_tags($this->__col_4__));

    // Bind data
    $stmt->bindParam(':__col_1__', $this->__col_1__);
    $stmt->bindParam(':__col_2__', $this->__col_2__);
    $stmt->bindParam(':__col_3__', $this->__col_3__);
    $stmt->bindParam(':__col_4__', $this->__col_4__);

    if ($stmt->execute()) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }

  public function update()
  {
    $query = 'UPDATE ' . $this->table . ' SET
                      __col_1__ = :__col_1__,
                      __col_2__ = :__col_2__,
                      __col_3__ = :__col_3__,
                      __col_4__ = :__col_4__
                    WHERE
                      __col_1__ = :__col_1__';

    $stmt = $this->conn->prepare($query);

    // Sanitizer
    $this->__col_1__ = htmlspecialchars(strip_tags($this->__col_1__));
    $this->__col_2__ = htmlspecialchars(strip_tags($this->__col_2__));
    $this->__col_3__ = htmlspecialchars(strip_tags($this->__col_3__));
    $this->__col_4__ = htmlspecialchars(strip_tags($this->__col_4__));

    // Bind data
    $stmt->bindParam(':__col_1__', $this->__col_1__);
    $stmt->bindParam(':__col_2__', $this->__col_2__);
    $stmt->bindParam(':__col_3__', $this->__col_3__);
    $stmt->bindParam(':__col_4__', $this->__col_4__);

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
                      __col_1__ = :__col_1__';

    $stmt = $this->conn->prepare($query);

    // Sanitizer
    $this->__col_1__ = htmlspecialchars(strip_tags($this->__col_1__));

    // Bind data
    $stmt->bindParam(':__col_1__', $this->__col_1__);

    if ($stmt->execute()) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }
}