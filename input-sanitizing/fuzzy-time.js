/*******************************************************************
 *                                                                 *
 *  Fuzzy time input                                               *
 *  +--------------+                                               *
 *  Sanitize manually inputed time. Can be used on the "blur"      *
 *  event of text inputs. When the user types a time in an         *
 *  understandable format, it will be converted to hh:mm.          *
 *                                                                 *
 *                                                                 *
 *                                                                 *
 *  Examples :                                                     *
 *  +--------+                                                     *
 *  INPUT   ->  OUTPUT                                             *
 *  1       ->  01:00   (zero-padded hours, 00 minutes added)      *
 *  10      ->  10:00   (00 minutes added)                         *
 *  103     ->  01:03   (zero-padded hours, delimiter added)       *
 *  1003    ->  10:03   (delimiter added)                          *
 *  1:12    ->  01:12   (zero-padded hours)                        *
 *  13:37   ->  13:37   (unchanged)                                *
 *                                                                 *
 *                                                                 *
 *                                                                 *
 *  Usage example, with jQuery :                                   *
 *  +--------------------------+                                   *
 *                                                                 *
 *  $("#myInput").blur  (                                          *
 *      function () {   var input = $(this).val();                 *
 *                      var cleanHours = fuzzyTime(input);         *
 *                      $(this).val(cleanHours ? cleanHours : ""); *
 *                  }                                              *
 *  );                                                             *
 *                                                                 *
 *                                                                 *
 *  Info :                                                         *
 *  +----+                                                         *
 *                                                                 *
 *  Version :   1.0                                                *
 *  Date    :   05/02/2015                                         *
 *  Author  :   dgarnier@timsoft.com                               *
 *                                                                 *
 *******************************************************************/

var fuzzyTime =
    function (input) {
        var regexp = /^([0-1]?[0-9]|2[0-3]):?([0-5][0-9])?$/;
        var matches = input.match(regexp);
        
        if (matches != null) {
            var h = matches[1].length == 1 ? "0" + matches[1] : matches[1];
            var m = matches[2] ? matches[2] : "00";
            return (h + ":" + m);
        }
        
        return null;
    };