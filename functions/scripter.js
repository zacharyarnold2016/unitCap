const scripter = (req) => {
  let script;
  const { move, pew, name } = req.body;

  if (!pew) {
    script = `_${name}movedata = ${move};\n
      _${name}dothings = [${name}, _${name}movedata] spawn BIS_fnc_UnitPlay;\n`;
  } else {
    script = `_${name}movedata = ${move};\n
      _${name}pewdata = ${pew};\n
      _${name}dothings = [${name}, _${name}movedata] spawn BIS_fnc_UnitPlay;\n
      [${name}, _${name}pewdata] spawn BIS_fnc_UnitPlayFiring;\n`;
  }
  return script;
};

export default scripter;
