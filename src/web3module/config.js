module.exports = {
  main: {
    URL:'https://ropsten.infura.io/v3/d564be5325db44c987739d0161a0670d',
    ContractAddress: '0x3865f2ad8b9127dbe36451993cc258afa01bc84d',
    ABIString:'[{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_role","type":"string"}],"name":"regActor","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"string"}],"name":"signRecord","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"string"},{"name":"KhoiLuongSua","type":"uint8"},{"name":"KhoiLuongCream","type":"uint8"},{"name":"KhoiLuongSuaCanSx","type":"uint8"},{"name":"KhoiLuongCreamCanSx","type":"uint8"},{"name":"LuongChatBeoBoSung","type":"uint8"},{"name":"LuongSuaGayBoSung","type":"uint8"}],"name":"writeChuanHoa","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"string"},{"name":"NhietDoLamLanh","type":"uint8"},{"name":"ThoiGianLamLanh","type":"uint8"},{"name":"Lactose","type":"uint8"},{"name":"NongDoChatBeo","type":"uint8"},{"name":"NongDoChatKho","type":"uint8"}],"name":"writeCoDac","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"string"},{"name":"NhietDo","type":"uint8"},{"name":"ApSuat","type":"uint8"},{"name":"ChatNhuHoa","type":"string"},{"name":"HamLuongCasein","type":"uint8"},{"name":"KichThuocHatKem","type":"uint8"},{"name":"ThoiGianLytam","type":"uint8"}],"name":"writeDongHoa","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"string"},{"name":"HamLuongChatBeo","type":"uint8"},{"name":"HamLuongProtein","type":"uint8"},{"name":"NhietDoDongBang","type":"uint8"},{"name":"LuongChatKho","type":"uint8"},{"name":"TyTrong","type":"uint8"}],"name":"writeLayMau","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"string"}],"name":"writeRecord","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"string"},{"name":"TongHamLuongChatKho","type":"uint8"},{"name":"HamLuongBeo","type":"uint8"},{"name":"MauThuPhosphatase","type":"uint8"},{"name":"Coliform","type":"uint8"},{"name":"Salmonella","type":"uint8"}],"name":"writeThanhTrung","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getActor","outputs":[{"name":"success","type":"bool"},{"name":"_name","type":"string"},{"name":"_role","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"string"}],"name":"getChuanHoa","outputs":[{"name":"KhoiLuongSua","type":"uint8"},{"name":"KhoiLuongCream","type":"uint8"},{"name":"KhoiLuongSuaCanSx","type":"uint8"},{"name":"KhoiLuongCreamCanSx","type":"uint8"},{"name":"LuongChatBeoBoSung","type":"uint8"},{"name":"LuongSuaGayBoSung","type":"uint8"},{"name":"recorder","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"string"}],"name":"getCoDac","outputs":[{"name":"NhietDoLamLanh","type":"uint8"},{"name":"ThoiGianLamLanh","type":"uint8"},{"name":"Lactose","type":"uint8"},{"name":"NongDoChatBeo","type":"uint8"},{"name":"NongDoChatKho","type":"uint8"},{"name":"recorder","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"string"}],"name":"getDongHoa","outputs":[{"name":"NhietDo","type":"uint8"},{"name":"ApSuat","type":"uint8"},{"name":"ChatNhuHoa","type":"string"},{"name":"HamLuongCasein","type":"uint8"},{"name":"KichThuocHatKem","type":"uint8"},{"name":"ThoiGianLytam","type":"uint8"},{"name":"recorder","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"string"}],"name":"getLayMau","outputs":[{"name":"HamLuongChatBeo","type":"uint8"},{"name":"HamLuongProtein","type":"uint8"},{"name":"NhietDoDongBang","type":"uint8"},{"name":"LuongChatKho","type":"uint8"},{"name":"TyTrong","type":"uint8"},{"name":"recorder","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"string"}],"name":"getRecord","outputs":[{"name":"ThongSoLayMau","type":"uint8"},{"name":"ThongSoChuanHoa","type":"uint8"},{"name":"ThongSoDongHoa","type":"uint8"},{"name":"ThongSoThanhTrung","type":"uint8"},{"name":"ThongSoCoDac","type":"uint8"},{"name":"signatures","type":"address[]"},{"name":"isApproved","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"string"}],"name":"getThanhTrung","outputs":[{"name":"TongHamLuongChatKho","type":"uint8"},{"name":"HamLuongBeo","type":"uint8"},{"name":"MauThuPhosphatase","type":"uint8"},{"name":"Coliform","type":"uint8"},{"name":"Salmonella","type":"uint8"},{"name":"recorder","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]'
  },
  ropsten: {
    URL:'https://ropsten.infura.io/v3/d564be5325db44c987739d0161a0670d',
    ContractAddress:'0x0080db7973150f7ca68bd59854cd84483f29e478'
  },
  ganache: {
    URL: "http://127.0.0.1:16969",
    ContractAddress:'0xfea78cD2B6AbE94C55616Ae3625dC4Bce94f4429',
    ABIString: ""
  }
}