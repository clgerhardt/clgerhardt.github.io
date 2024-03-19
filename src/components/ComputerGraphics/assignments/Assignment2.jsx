import React from "react";
import Container from "react-bootstrap/Container";

const Assignment1 = (props) => {
  // useEffect(() => {

  // });

  function multiply(A, B) {
    // find the sizes of matrices A, and B (they could be vectors)
    // assign the sizes to r1, c1, r2, c2

    let r1 = A.length;
    let c1 = A[0].length;

    let r2 = B.length;
    let c2 = B[0].length;

    // if the matrices are not comformable, output an alert and return
    if (c1 !== r2) {
      alert("sizes are not compatitble.");
      return;
    }

    // compute the size of the output matrix, assign to r3 and c3
    let r3 = r1;
    let c3 = c2;
    // create the new matrix C
    let C = [];
    for (var i = 0; i < r3; i++) {
      C[i] = [];
      for (var j = 0; j < c3; j++) {
        C[i][j] = 0;
      }
    }
    // compute C

    for (var r = 0; r < r3; r++) {
      for (var c = 0; c < c3; c++) {
        for (var k = 0; k < r3; k++) {
          C[r][c] += A[r][k] * B[k][c];
        }
      }
    }

    return C;
  }

  function get_part1matrices_from_html() {
    let A = [];
    for (let i = 0; i < 4; i++) A[i] = []; // initialize
    let B = [];
    for (let i = 0; i < 4; i++) B[i] = []; // initialize

    // we know A is 4x4, you may hard-code those values

    for (var r = 1; r < 5; r++) {
      for (var c = 1; c < 5; c++) {
        var a_val = document.getElementById("a" + r + "" + c);
        var b_val = document.getElementById("b" + r + "" + c);

        if (a_val.value === "" || b_val.value === "") {
          alert("That is a not a valid entry @ " + r + "," + c);
          return;
        }
        if (!isNaN(a_val.value)) {
          A[r - 1][c - 1] = parseFloat(a_val.value);
        } else {
          alert("This value is not an number @ " + r + "," + c);
          return;
        }
        // console.log(parseFloat(b_val.value), r + ',' + c)
        if (!isNaN(b_val.value)) {
          B[r - 1][c - 1] = parseFloat(b_val.value);
        } else {
          alert("This value is not an number @ " + r + "," + c);
          return;
        }
      }
    }

    return { A, B };
  }

  function get_part2matrices_from_html() {
    let A = [];
    for (let i = 0; i < 4; i++) A[i] = []; // initialize
    let B = [];
    for (let i = 0; i < 4; i++) B[i] = []; // initialize

    for (let r = 1; r < 5; r++) {
      for (let c = 1; c < 5; c++) {
        let a_val = document.getElementById("d" + r + "" + c);

        if (a_val.value === "") {
          alert("That is a not a valid entry." + r + "," + c);
          return;
        }
        if (!isNaN(a_val.value)) {
          A[r - 1][c - 1] = parseFloat(a_val.value);
        } else {
          alert("This value is not an number." + r + "," + c);
          return;
        }

        if (c === 1) {
          let b_val = document.getElementById("e" + r + "" + c);
          if (b_val.value === "") {
            alert("That is a not a valid entry." + r + "," + c);
            return;
          }
          if (!isNaN(b_val.value)) {
            B[r - 1][c - 1] = parseFloat(b_val.value);
          } else {
            alert("This value is not an number." + r + "," + c);
            return;
          }
        }
      }
    }
    return { A, B };
  }

  const workPart1 = () => {
    let { A, B } = get_part1matrices_from_html(); // fetch data from HTML tables

    var C = multiply(A, B); // perform the multiplication
    var r3 = C.length; // find output matrix rows
    var c3 = C[0].length; // find output matrix columns
    for (var r = 0; r < r3; r++) {
      for (var c = 0; c < c3; c++) {
        // populate HTML table C
        document.getElementById(
          "c" + (r + 1).toString() + (c + 1).toString()
        ).value = C[r][c];
      }
    }
    document.getElementById("output").innerHTML = "Done!";
  };

  const workPart2 = () => {
    let { A, B } = get_part2matrices_from_html(); // fetch data from HTML tables
    var C = multiply(A, B); // perform the multiplication
    var r3 = C.length; // find output matrix rows
    var c3 = C[0].length; // find output matrix columns
    for (var r = 0; r < r3; r++) {
      for (var c = 0; c < c3; c++) {
        // populate HTML table f
        document.getElementById(
          "f" + (r + 1).toString() + (c + 1).toString()
        ).value = C[r][c];
      }
    }
    document.getElementById("output").innerHTML = "Done!";
  };

  return (
    <>
      <Container>
        <p>PART 1</p>

        <table>
          <tr>
            <td>
              <table border="1">
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="a11" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a12" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a13" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a14" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="a21" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a22" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a23" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a24" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="a31" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a32" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a33" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a34" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="a41" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a42" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a43" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="a44" value="1" />
                  </td>{" "}
                </tr>
              </table>
            </td>
            <td> * </td>
            <td>
              <table border="1">
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="b11" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b12" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b13" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b14" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="b21" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b22" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b23" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b24" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="b31" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b32" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b33" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b34" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="b41" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b42" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b43" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="b44" value="1" />
                  </td>{" "}
                </tr>
              </table>
            </td>
            <td> = </td>
            <td>
              <table border="1">
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="c11" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c12" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c13" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c14" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="c21" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c22" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c23" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c24" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="c31" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c32" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c33" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c34" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="c41" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c42" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c43" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="c44" />
                  </td>{" "}
                </tr>
              </table>
            </td>
          </tr>
          <tr align="center">
            <td> A </td> <td></td> <td>B</td>
            <td></td>
            <td>C</td>
          </tr>
        </table>

        {/* <p>&nbsp;</p> */}
        <input type="button" value="compute" onClick={workPart1}></input>

        {/*  */}

        <p> PART 2 </p>

        <table>
          <tr>
            <td>
              <table border="1">
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="d11" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d12" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d13" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d14" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="d21" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d22" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d23" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d24" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="d31" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d32" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d33" value="1" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d34" value="0" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="d41" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d42" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d43" value="0" />
                  </td>{" "}
                  <td>
                    <input type="text" size="1" id="d44" value="1" />
                  </td>{" "}
                </tr>
              </table>
            </td>
            <td> * </td>
            <td>
              <table border="1">
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="e11" value="1" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="e21" value="1" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="e31" value="1" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="e41" value="1" />
                  </td>{" "}
                </tr>
              </table>
            </td>
            <td> = </td>
            <td>
              <table border="1">
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="f11" value="" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="f21" value="" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="f31" value="" />
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    <input type="text" size="1" id="f41" value="" />
                  </td>{" "}
                </tr>
              </table>
            </td>
          </tr>
          <tr align="center">
            <td> D </td> <td></td> <td>E</td>
            <td></td>
            <td></td>
            <td>F</td>
          </tr>
        </table>

        {/* <p>&nbsp;</p> */}
        <input type="button" value="compute" onClick={workPart2} />

        <p id="output"></p>
      </Container>
    </>
  );
};

export default Assignment1;
