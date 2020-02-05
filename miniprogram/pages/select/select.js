Page({
  data: {
    noVal: '',
    dateVal: '',
    currentVal:0
  },
  clearResult:function(){
    this.setData({
      nullVal:false,
      result_0: null,
      result_1: null,
      result_2: null,
      result_3: null,
      result_4: null,
      result_5: null,
      result_6: null,
      result_7: null,
      result_8: null,
      result_9: null,
      result_10: null,
      result_11: null,
      result_12: null,
      result_13: null,
      result_14: null,
      result_15: null,
      result_16: null,
      result_17: null,
      result_18: null,
      result_19: null,
      result_20: null,
      result_21: null,
      result_22: null,
      result_23: null,
      result_24: null,
      result_25: null,
      result_26: null,
      result_27: null,
      result_28: null,
      result_29: null,
      result_30: null,
      result_31: null,
      result_32: null,
      result_33: null,
      result_34: null,
      result_35: null,
      result_36: null,
      result_37: null,
      result_38: null,
      result_39: null,
      result_40: null,
      result_41: null,
      result_42: null,
      result_43: null,
      result_44: null,
      result_45: null,
      result_46: null,
      result_47: null,
      result_48: null,
      result_49: null,
      result_50: null,
      result_51: null,
      result_52: null,
      result_53: null,
      result_54: null,
      result_55: null,
      result_56: null,
      result_57: null,
      result_58: null,
      result_59: null,
      result_60: null,
      result_61: null,
      result_62: null,
      result_63: null,
      result_64: null,
      result_65: null,
      result_66: null,
      result_67: null,
      result_68: null,
      result_69: null,
      result_70: null,
      result_71: null,
      result_72: null,
      result_73: null,
      result_74: null,
      result_75: null,
      result_76: null,
      result_77: null,
      result_78: null,
      result_79: null,
      result_80: null,
      result_81: null,
      result_82: null,
      result_83: null,
      result_84: null,
      result_85: null,
      result_86: null,
      result_87: null,
      result_88: null,
      result_89: null,
      result_90: null,
      result_91: null,
      result_92: null,
      result_93: null,
      result_94: null,
      result_95: null,
      result_96: null,
      result_97: null,
      result_98: null,
      result_99: null,
      result_100: null,
      result_101: null,
      result_102: null,
      result_103: null,
      result_104: null,
      result_105: null,
      result_106: null,
      result_107: null,
      result_108: null,
      result_109: null,
      result_110: null,
      result_111: null,
      result_112: null,
      result_113: null,
      result_114: null,
      result_115: null,
      result_116: null,
      result_117: null,
      result_118: null,
      result_119: null,
      result_120: null,
      result_121: null,
      result_122: null,
      result_123: null,
      result_124: null,
      result_125: null,
      result_126: null,
      result_127: null,
      result_128: null,
      result_129: null,
      result_130: null,
      result_131: null,
      result_132: null,
      result_133: null,
      result_134: null,
      result_135: null,
      result_136: null,
      result_137: null,
      result_138: null,
      result_139: null,
      result_140: null,
      result_141: null,
      result_142: null,
      result_143: null,
      result_144: null,
      result_145: null,
      result_146: null,
      result_147: null,
      result_148: null,
      result_149: null,
      result_150: null,
      result_151: null,
      result_152: null,
      result_153: null,
      result_154: null,
      result_155: null,
      result_156: null,
      result_157: null,
      result_158: null,
      result_159: null,
      result_160: null,
      result_161: null,
      result_162: null,
      result_163: null,
      result_164: null,
      result_165: null,
      result_166: null,
      result_167: null,
      result_168: null,
      result_169: null,
      result_170: null,
      result_171: null,
      result_172: null,
      result_173: null,
      result_174: null,
      result_175: null,
      result_176: null,
      result_177: null,
      result_178: null,
      result_179: null,
      result_180: null,
      result_181: null,
      result_182: null,
      result_183: null,
      result_184: null,
      result_185: null,
      result_186: null,
      result_187: null,
      result_188: null,
      result_189: null,
      result_190: null,
      result_191: null,
      result_192: null,
      result_193: null,
      result_194: null,
      result_195: null,
      result_196: null,
      result_197: null,
      result_198: null,
      result_199: null,
      result_200: null,
      result_201: null,
      result_202: null,
      result_203: null,
      result_204: null,
      result_205: null,
      result_206: null,
      result_207: null,
      result_208: null,
      result_209: null,
      result_210: null,
      result_211: null,
      result_212: null,
      result_213: null,
      result_214: null,
      result_215: null,
      result_216: null,
      result_217: null,
      result_218: null,
      result_219: null,
      result_220: null,
      result_221: null,
      result_222: null,
      result_223: null,
      result_224: null,
      result_225: null,
      result_226: null,
      result_227: null,
      result_228: null,
      result_229: null,
      result_230: null,
      result_231: null,
      result_232: null,
      result_233: null,
      result_234: null,
      result_235: null,
      result_236: null,
      result_237: null,
      result_238: null,
      result_239: null,
      result_240: null,
      result_241: null,
      result_242: null,
      result_243: null,
      result_244: null,
      result_245: null,
      result_246: null,
      result_247: null,
      result_248: null,
      result_249: null,
      result_250: null,
      result_251: null,
      result_252: null,
      result_253: null,
      result_254: null,
      result_255: null,
      result_256: null,
      result_257: null,
      result_258: null,
      result_259: null,
      result_260: null,
      result_261: null,
      result_262: null,
      result_263: null,
      result_264: null,
      result_265: null,
      result_266: null,
      result_267: null,
      result_268: null,
      result_269: null,
      result_270: null,
      result_271: null,
      result_272: null,
      result_273: null,
      result_274: null,
      result_275: null,
      result_276: null,
      result_277: null,
      result_278: null,
      result_279: null,
      result_280: null,
      result_281: null,
      result_282: null,
      result_283: null,
      result_284: null,
      result_285: null,
      result_286: null,
      result_287: null,
      result_288: null,
      result_289: null,
      result_290: null,
      result_291: null,
      result_292: null,
      result_293: null,
      result_294: null,
      result_295: null,
      result_296: null,
      result_297: null,
      result_298: null,
      result_299: null,
      result_300: null,
      result_301: null,
      result_302: null,
      result_303: null,
      result_304: null,
      result_305: null,
      result_306: null,
      result_307: null,
      result_308: null,
      result_309: null,
      result_310: null,
      result_311: null,
      result_312: null,
      result_313: null,
      result_314: null,
      result_315: null,
      result_316: null,
      result_317: null,
      result_318: null,
      result_319: null,
      result_320: null,
      result_321: null,
      result_322: null,
      result_323: null,
      result_324: null,
      result_325: null,
      result_326: null,
      result_327: null,
      result_328: null,
      result_329: null,
      result_330: null,
      result_331: null,
      result_332: null,
      result_333: null,
      result_334: null,
      result_335: null,
      result_336: null,
      result_337: null,
      result_338: null,
      result_339: null,
      result_340: null,
      result_341: null,
      result_342: null,
      result_343: null,
      result_344: null,
      result_345: null,
      result_346: null,
      result_347: null,
      result_348: null,
      result_349: null,
      result_350: null,
      result_351: null,
      result_352: null,
      result_353: null,
      result_354: null,
      result_355: null,
      result_356: null,
      result_357: null,
      result_358: null,
      result_359: null,
      result_360: null,
      result_361: null,
      result_362: null,
      result_363: null,
      result_364: null,
      result_365: null,
      result_366: null,
      result_367: null,
      result_368: null,
      result_369: null,
      result_370: null,
      result_371: null,
      result_372: null,
      result_373: null,
      result_374: null,
      result_375: null,
      result_376: null,
      result_377: null,
      result_378: null,
      result_379: null,
      result_380: null,
      result_381: null,
      result_382: null,
      result_383: null,
      result_384: null,
      result_385: null,
      result_386: null,
      result_387: null,
      result_388: null,
      result_389: null,
      result_390: null,
      result_391: null,
      result_392: null,
      result_393: null,
      result_394: null,
      result_395: null,
      result_396: null,
      result_397: null,
      result_398: null,
      result_399: null,
      result_400: null,
      result_401: null,
      result_402: null,
      result_403: null,
      result_404: null,
      result_405: null,
      result_406: null,
      result_407: null,
      result_408: null,
      result_409: null,
      result_410: null,
      result_411: null,
      result_412: null,
      result_413: null,
      result_414: null,
      result_415: null,
      result_416: null,
      result_417: null,
      result_418: null,
      result_419: null,
      result_420: null,
      result_421: null,
      result_422: null,
      result_423: null,
      result_424: null,
      result_425: null,
      result_426: null,
      result_427: null,
      result_428: null,
      result_429: null,
      result_430: null,
      result_431: null,
      result_432: null,
      result_433: null,
      result_434: null,
      result_435: null,
      result_436: null,
      result_437: null,
      result_438: null,
      result_439: null,
      result_440: null,
      result_441: null,
      result_442: null,
      result_443: null,
      result_444: null,
      result_445: null,
      result_446: null,
      result_447: null,
      result_448: null,
      result_449: null,
      result_450: null,
      result_451: null,
      result_452: null,
      result_453: null,
      result_454: null,
      result_455: null,
      result_456: null,
      result_457: null,
      result_458: null,
      result_459: null,
      result_460: null,
      result_461: null,
      result_462: null,
      result_463: null,
      result_464: null,
      result_465: null,
      result_466: null,
      result_467: null,
      result_468: null,
      result_469: null,
      result_470: null,
      result_471: null,
      result_472: null,
      result_473: null,
      result_474: null,
      result_475: null,
      result_476: null,
      result_477: null,
      result_478: null,
      result_479: null,
      result_480: null,
      result_481: null,
      result_482: null,
      result_483: null,
      result_484: null,
      result_485: null,
      result_486: null,
      result_487: null,
      result_488: null,
      result_489: null,
      result_490: null,
      result_491: null,
      result_492: null,
      result_493: null,
      result_494: null,
      result_495: null,
      result_496: null,
      result_497: null,
      result_498: null,
      result_499: null
    })
  },
  setResult:function(res){
    if (this.data.currentVal == 0)
    {
      if(res.length == 0)
      {
        this.setData({
          nullVal:true
        })
      }
      else{
        this.setData({
          nullVal: false
        })
      }
    }
    switch (this.data.currentVal) {
      case 0:
        {
          this.setData({
            result_0: res
          })
        }
        break;
      case 1:
        {
          this.setData({
            result_1: res
          })
        }
        break;
      case 2:
        {
          this.setData({
            result_2: res
          })
        }
        break;
      case 3:
        {
          this.setData({
            result_3: res
          })
        }
        break;
      case 4:
        {
          this.setData({
            result_4: res
          })
        }
        break;
      case 5:
        {
          this.setData({
            result_5: res
          })
        }
        break;
      case 6:
        {
          this.setData({
            result_6: res
          })
        }
        break;
      case 7:
        {
          this.setData({
            result_7: res
          })
        }
        break;
      case 8:
        {
          this.setData({
            result_8: res
          })
        }
        break;
      case 9:
        {
          this.setData({
            result_9: res
          })
        }
        break;
      case 10:
        {
          this.setData({
            result_10: res
          })
        }
        break;
      case 11:
        {
          this.setData({
            result_11: res
          })
        }
        break;
      case 12:
        {
          this.setData({
            result_12: res
          })
        }
        break;
      case 13:
        {
          this.setData({
            result_13: res
          })
        }
        break;
      case 14:
        {
          this.setData({
            result_14: res
          })
        }
        break;
      case 15:
        {
          this.setData({
            result_15: res
          })
        }
        break;
      case 16:
        {
          this.setData({
            result_16: res
          })
        }
        break;
      case 17:
        {
          this.setData({
            result_17: res
          })
        }
        break;
      case 18:
        {
          this.setData({
            result_18: res
          })
        }
        break;
      case 19:
        {
          this.setData({
            result_19: res
          })
        }
        break;
      case 20:
        {
          this.setData({
            result_20: res
          })
        }
        break;
      case 21:
        {
          this.setData({
            result_21: res
          })
        }
        break;
      case 22:
        {
          this.setData({
            result_22: res
          })
        }
        break;
      case 23:
        {
          this.setData({
            result_23: res
          })
        }
        break;
      case 24:
        {
          this.setData({
            result_24: res
          })
        }
        break;
      case 25:
        {
          this.setData({
            result_25: res
          })
        }
        break;
      case 26:
        {
          this.setData({
            result_26: res
          })
        }
        break;
      case 27:
        {
          this.setData({
            result_27: res
          })
        }
        break;
      case 28:
        {
          this.setData({
            result_28: res
          })
        }
        break;
      case 29:
        {
          this.setData({
            result_29: res
          })
        }
        break;
      case 30:
        {
          this.setData({
            result_30: res
          })
        }
        break;
      case 31:
        {
          this.setData({
            result_31: res
          })
        }
        break;
      case 32:
        {
          this.setData({
            result_32: res
          })
        }
        break;
      case 33:
        {
          this.setData({
            result_33: res
          })
        }
        break;
      case 34:
        {
          this.setData({
            result_34: res
          })
        }
        break;
      case 35:
        {
          this.setData({
            result_35: res
          })
        }
        break;
      case 36:
        {
          this.setData({
            result_36: res
          })
        }
        break;
      case 37:
        {
          this.setData({
            result_37: res
          })
        }
        break;
      case 38:
        {
          this.setData({
            result_38: res
          })
        }
        break;
      case 39:
        {
          this.setData({
            result_39: res
          })
        }
        break;
      case 40:
        {
          this.setData({
            result_40: res
          })
        }
        break;
      case 41:
        {
          this.setData({
            result_41: res
          })
        }
        break;
      case 42:
        {
          this.setData({
            result_42: res
          })
        }
        break;
      case 43:
        {
          this.setData({
            result_43: res
          })
        }
        break;
      case 44:
        {
          this.setData({
            result_44: res
          })
        }
        break;
      case 45:
        {
          this.setData({
            result_45: res
          })
        }
        break;
      case 46:
        {
          this.setData({
            result_46: res
          })
        }
        break;
      case 47:
        {
          this.setData({
            result_47: res
          })
        }
        break;
      case 48:
        {
          this.setData({
            result_48: res
          })
        }
        break;
      case 49:
        {
          this.setData({
            result_49: res
          })
        }
        break;
      case 50:
        {
          this.setData({
            result_50: res
          })
        }
        break;
      case 51:
        {
          this.setData({
            result_51: res
          })
        }
        break;
      case 52:
        {
          this.setData({
            result_52: res
          })
        }
        break;
      case 53:
        {
          this.setData({
            result_53: res
          })
        }
        break;
      case 54:
        {
          this.setData({
            result_54: res
          })
        }
        break;
      case 55:
        {
          this.setData({
            result_55: res
          })
        }
        break;
      case 56:
        {
          this.setData({
            result_56: res
          })
        }
        break;
      case 57:
        {
          this.setData({
            result_57: res
          })
        }
        break;
      case 58:
        {
          this.setData({
            result_58: res
          })
        }
        break;
      case 59:
        {
          this.setData({
            result_59: res
          })
        }
        break;
      case 60:
        {
          this.setData({
            result_60: res
          })
        }
        break;
      case 61:
        {
          this.setData({
            result_61: res
          })
        }
        break;
      case 62:
        {
          this.setData({
            result_62: res
          })
        }
        break;
      case 63:
        {
          this.setData({
            result_63: res
          })
        }
        break;
      case 64:
        {
          this.setData({
            result_64: res
          })
        }
        break;
      case 65:
        {
          this.setData({
            result_65: res
          })
        }
        break;
      case 66:
        {
          this.setData({
            result_66: res
          })
        }
        break;
      case 67:
        {
          this.setData({
            result_67: res
          })
        }
        break;
      case 68:
        {
          this.setData({
            result_68: res
          })
        }
        break;
      case 69:
        {
          this.setData({
            result_69: res
          })
        }
        break;
      case 70:
        {
          this.setData({
            result_70: res
          })
        }
        break;
      case 71:
        {
          this.setData({
            result_71: res
          })
        }
        break;
      case 72:
        {
          this.setData({
            result_72: res
          })
        }
        break;
      case 73:
        {
          this.setData({
            result_73: res
          })
        }
        break;
      case 74:
        {
          this.setData({
            result_74: res
          })
        }
        break;
      case 75:
        {
          this.setData({
            result_75: res
          })
        }
        break;
      case 76:
        {
          this.setData({
            result_76: res
          })
        }
        break;
      case 77:
        {
          this.setData({
            result_77: res
          })
        }
        break;
      case 78:
        {
          this.setData({
            result_78: res
          })
        }
        break;
      case 79:
        {
          this.setData({
            result_79: res
          })
        }
        break;
      case 80:
        {
          this.setData({
            result_80: res
          })
        }
        break;
      case 81:
        {
          this.setData({
            result_81: res
          })
        }
        break;
      case 82:
        {
          this.setData({
            result_82: res
          })
        }
        break;
      case 83:
        {
          this.setData({
            result_83: res
          })
        }
        break;
      case 84:
        {
          this.setData({
            result_84: res
          })
        }
        break;
      case 85:
        {
          this.setData({
            result_85: res
          })
        }
        break;
      case 86:
        {
          this.setData({
            result_86: res
          })
        }
        break;
      case 87:
        {
          this.setData({
            result_87: res
          })
        }
        break;
      case 88:
        {
          this.setData({
            result_88: res
          })
        }
        break;
      case 89:
        {
          this.setData({
            result_89: res
          })
        }
        break;
      case 90:
        {
          this.setData({
            result_90: res
          })
        }
        break;
      case 91:
        {
          this.setData({
            result_91: res
          })
        }
        break;
      case 92:
        {
          this.setData({
            result_92: res
          })
        }
        break;
      case 93:
        {
          this.setData({
            result_93: res
          })
        }
        break;
      case 94:
        {
          this.setData({
            result_94: res
          })
        }
        break;
      case 95:
        {
          this.setData({
            result_95: res
          })
        }
        break;
      case 96:
        {
          this.setData({
            result_96: res
          })
        }
        break;
      case 97:
        {
          this.setData({
            result_97: res
          })
        }
        break;
      case 98:
        {
          this.setData({
            result_98: res
          })
        }
        break;
      case 99:
        {
          this.setData({
            result_99: res
          })
        }
        break;
      case 100:
        {
          this.setData({
            result_100: res
          })
        }
        break;
      case 101:
        {
          this.setData({
            result_101: res
          })
        }
        break;
      case 102:
        {
          this.setData({
            result_102: res
          })
        }
        break;
      case 103:
        {
          this.setData({
            result_103: res
          })
        }
        break;
      case 104:
        {
          this.setData({
            result_104: res
          })
        }
        break;
      case 105:
        {
          this.setData({
            result_105: res
          })
        }
        break;
      case 106:
        {
          this.setData({
            result_106: res
          })
        }
        break;
      case 107:
        {
          this.setData({
            result_107: res
          })
        }
        break;
      case 108:
        {
          this.setData({
            result_108: res
          })
        }
        break;
      case 109:
        {
          this.setData({
            result_109: res
          })
        }
        break;
      case 110:
        {
          this.setData({
            result_110: res
          })
        }
        break;
      case 111:
        {
          this.setData({
            result_111: res
          })
        }
        break;
      case 112:
        {
          this.setData({
            result_112: res
          })
        }
        break;
      case 113:
        {
          this.setData({
            result_113: res
          })
        }
        break;
      case 114:
        {
          this.setData({
            result_114: res
          })
        }
        break;
      case 115:
        {
          this.setData({
            result_115: res
          })
        }
        break;
      case 116:
        {
          this.setData({
            result_116: res
          })
        }
        break;
      case 117:
        {
          this.setData({
            result_117: res
          })
        }
        break;
      case 118:
        {
          this.setData({
            result_118: res
          })
        }
        break;
      case 119:
        {
          this.setData({
            result_119: res
          })
        }
        break;
      case 120:
        {
          this.setData({
            result_120: res
          })
        }
        break;
      case 121:
        {
          this.setData({
            result_121: res
          })
        }
        break;
      case 122:
        {
          this.setData({
            result_122: res
          })
        }
        break;
      case 123:
        {
          this.setData({
            result_123: res
          })
        }
        break;
      case 124:
        {
          this.setData({
            result_124: res
          })
        }
        break;
      case 125:
        {
          this.setData({
            result_125: res
          })
        }
        break;
      case 126:
        {
          this.setData({
            result_126: res
          })
        }
        break;
      case 127:
        {
          this.setData({
            result_127: res
          })
        }
        break;
      case 128:
        {
          this.setData({
            result_128: res
          })
        }
        break;
      case 129:
        {
          this.setData({
            result_129: res
          })
        }
        break;
      case 130:
        {
          this.setData({
            result_130: res
          })
        }
        break;
      case 131:
        {
          this.setData({
            result_131: res
          })
        }
        break;
      case 132:
        {
          this.setData({
            result_132: res
          })
        }
        break;
      case 133:
        {
          this.setData({
            result_133: res
          })
        }
        break;
      case 134:
        {
          this.setData({
            result_134: res
          })
        }
        break;
      case 135:
        {
          this.setData({
            result_135: res
          })
        }
        break;
      case 136:
        {
          this.setData({
            result_136: res
          })
        }
        break;
      case 137:
        {
          this.setData({
            result_137: res
          })
        }
        break;
      case 138:
        {
          this.setData({
            result_138: res
          })
        }
        break;
      case 139:
        {
          this.setData({
            result_139: res
          })
        }
        break;
      case 140:
        {
          this.setData({
            result_140: res
          })
        }
        break;
      case 141:
        {
          this.setData({
            result_141: res
          })
        }
        break;
      case 142:
        {
          this.setData({
            result_142: res
          })
        }
        break;
      case 143:
        {
          this.setData({
            result_143: res
          })
        }
        break;
      case 144:
        {
          this.setData({
            result_144: res
          })
        }
        break;
      case 145:
        {
          this.setData({
            result_145: res
          })
        }
        break;
      case 146:
        {
          this.setData({
            result_146: res
          })
        }
        break;
      case 147:
        {
          this.setData({
            result_147: res
          })
        }
        break;
      case 148:
        {
          this.setData({
            result_148: res
          })
        }
        break;
      case 149:
        {
          this.setData({
            result_149: res
          })
        }
        break;
      case 150:
        {
          this.setData({
            result_150: res
          })
        }
        break;
      case 151:
        {
          this.setData({
            result_151: res
          })
        }
        break;
      case 152:
        {
          this.setData({
            result_152: res
          })
        }
        break;
      case 153:
        {
          this.setData({
            result_153: res
          })
        }
        break;
      case 154:
        {
          this.setData({
            result_154: res
          })
        }
        break;
      case 155:
        {
          this.setData({
            result_155: res
          })
        }
        break;
      case 156:
        {
          this.setData({
            result_156: res
          })
        }
        break;
      case 157:
        {
          this.setData({
            result_157: res
          })
        }
        break;
      case 158:
        {
          this.setData({
            result_158: res
          })
        }
        break;
      case 159:
        {
          this.setData({
            result_159: res
          })
        }
        break;
      case 160:
        {
          this.setData({
            result_160: res
          })
        }
        break;
      case 161:
        {
          this.setData({
            result_161: res
          })
        }
        break;
      case 162:
        {
          this.setData({
            result_162: res
          })
        }
        break;
      case 163:
        {
          this.setData({
            result_163: res
          })
        }
        break;
      case 164:
        {
          this.setData({
            result_164: res
          })
        }
        break;
      case 165:
        {
          this.setData({
            result_165: res
          })
        }
        break;
      case 166:
        {
          this.setData({
            result_166: res
          })
        }
        break;
      case 167:
        {
          this.setData({
            result_167: res
          })
        }
        break;
      case 168:
        {
          this.setData({
            result_168: res
          })
        }
        break;
      case 169:
        {
          this.setData({
            result_169: res
          })
        }
        break;
      case 170:
        {
          this.setData({
            result_170: res
          })
        }
        break;
      case 171:
        {
          this.setData({
            result_171: res
          })
        }
        break;
      case 172:
        {
          this.setData({
            result_172: res
          })
        }
        break;
      case 173:
        {
          this.setData({
            result_173: res
          })
        }
        break;
      case 174:
        {
          this.setData({
            result_174: res
          })
        }
        break;
      case 175:
        {
          this.setData({
            result_175: res
          })
        }
        break;
      case 176:
        {
          this.setData({
            result_176: res
          })
        }
        break;
      case 177:
        {
          this.setData({
            result_177: res
          })
        }
        break;
      case 178:
        {
          this.setData({
            result_178: res
          })
        }
        break;
      case 179:
        {
          this.setData({
            result_179: res
          })
        }
        break;
      case 180:
        {
          this.setData({
            result_180: res
          })
        }
        break;
      case 181:
        {
          this.setData({
            result_181: res
          })
        }
        break;
      case 182:
        {
          this.setData({
            result_182: res
          })
        }
        break;
      case 183:
        {
          this.setData({
            result_183: res
          })
        }
        break;
      case 184:
        {
          this.setData({
            result_184: res
          })
        }
        break;
      case 185:
        {
          this.setData({
            result_185: res
          })
        }
        break;
      case 186:
        {
          this.setData({
            result_186: res
          })
        }
        break;
      case 187:
        {
          this.setData({
            result_187: res
          })
        }
        break;
      case 188:
        {
          this.setData({
            result_188: res
          })
        }
        break;
      case 189:
        {
          this.setData({
            result_189: res
          })
        }
        break;
      case 190:
        {
          this.setData({
            result_190: res
          })
        }
        break;
      case 191:
        {
          this.setData({
            result_191: res
          })
        }
        break;
      case 192:
        {
          this.setData({
            result_192: res
          })
        }
        break;
      case 193:
        {
          this.setData({
            result_193: res
          })
        }
        break;
      case 194:
        {
          this.setData({
            result_194: res
          })
        }
        break;
      case 195:
        {
          this.setData({
            result_195: res
          })
        }
        break;
      case 196:
        {
          this.setData({
            result_196: res
          })
        }
        break;
      case 197:
        {
          this.setData({
            result_197: res
          })
        }
        break;
      case 198:
        {
          this.setData({
            result_198: res
          })
        }
        break;
      case 199:
        {
          this.setData({
            result_199: res
          })
        }
        break;
      case 200:
        {
          this.setData({
            result_200: res
          })
        }
        break;
      case 201:
        {
          this.setData({
            result_201: res
          })
        }
        break;
      case 202:
        {
          this.setData({
            result_202: res
          })
        }
        break;
      case 203:
        {
          this.setData({
            result_203: res
          })
        }
        break;
      case 204:
        {
          this.setData({
            result_204: res
          })
        }
        break;
      case 205:
        {
          this.setData({
            result_205: res
          })
        }
        break;
      case 206:
        {
          this.setData({
            result_206: res
          })
        }
        break;
      case 207:
        {
          this.setData({
            result_207: res
          })
        }
        break;
      case 208:
        {
          this.setData({
            result_208: res
          })
        }
        break;
      case 209:
        {
          this.setData({
            result_209: res
          })
        }
        break;
      case 210:
        {
          this.setData({
            result_210: res
          })
        }
        break;
      case 211:
        {
          this.setData({
            result_211: res
          })
        }
        break;
      case 212:
        {
          this.setData({
            result_212: res
          })
        }
        break;
      case 213:
        {
          this.setData({
            result_213: res
          })
        }
        break;
      case 214:
        {
          this.setData({
            result_214: res
          })
        }
        break;
      case 215:
        {
          this.setData({
            result_215: res
          })
        }
        break;
      case 216:
        {
          this.setData({
            result_216: res
          })
        }
        break;
      case 217:
        {
          this.setData({
            result_217: res
          })
        }
        break;
      case 218:
        {
          this.setData({
            result_218: res
          })
        }
        break;
      case 219:
        {
          this.setData({
            result_219: res
          })
        }
        break;
      case 220:
        {
          this.setData({
            result_220: res
          })
        }
        break;
      case 221:
        {
          this.setData({
            result_221: res
          })
        }
        break;
      case 222:
        {
          this.setData({
            result_222: res
          })
        }
        break;
      case 223:
        {
          this.setData({
            result_223: res
          })
        }
        break;
      case 224:
        {
          this.setData({
            result_224: res
          })
        }
        break;
      case 225:
        {
          this.setData({
            result_225: res
          })
        }
        break;
      case 226:
        {
          this.setData({
            result_226: res
          })
        }
        break;
      case 227:
        {
          this.setData({
            result_227: res
          })
        }
        break;
      case 228:
        {
          this.setData({
            result_228: res
          })
        }
        break;
      case 229:
        {
          this.setData({
            result_229: res
          })
        }
        break;
      case 230:
        {
          this.setData({
            result_230: res
          })
        }
        break;
      case 231:
        {
          this.setData({
            result_231: res
          })
        }
        break;
      case 232:
        {
          this.setData({
            result_232: res
          })
        }
        break;
      case 233:
        {
          this.setData({
            result_233: res
          })
        }
        break;
      case 234:
        {
          this.setData({
            result_234: res
          })
        }
        break;
      case 235:
        {
          this.setData({
            result_235: res
          })
        }
        break;
      case 236:
        {
          this.setData({
            result_236: res
          })
        }
        break;
      case 237:
        {
          this.setData({
            result_237: res
          })
        }
        break;
      case 238:
        {
          this.setData({
            result_238: res
          })
        }
        break;
      case 239:
        {
          this.setData({
            result_239: res
          })
        }
        break;
      case 240:
        {
          this.setData({
            result_240: res
          })
        }
        break;
      case 241:
        {
          this.setData({
            result_241: res
          })
        }
        break;
      case 242:
        {
          this.setData({
            result_242: res
          })
        }
        break;
      case 243:
        {
          this.setData({
            result_243: res
          })
        }
        break;
      case 244:
        {
          this.setData({
            result_244: res
          })
        }
        break;
      case 245:
        {
          this.setData({
            result_245: res
          })
        }
        break;
      case 246:
        {
          this.setData({
            result_246: res
          })
        }
        break;
      case 247:
        {
          this.setData({
            result_247: res
          })
        }
        break;
      case 248:
        {
          this.setData({
            result_248: res
          })
        }
        break;
      case 249:
        {
          this.setData({
            result_249: res
          })
        }
        break;
      case 250:
        {
          this.setData({
            result_250: res
          })
        }
        break;
      case 251:
        {
          this.setData({
            result_251: res
          })
        }
        break;
      case 252:
        {
          this.setData({
            result_252: res
          })
        }
        break;
      case 253:
        {
          this.setData({
            result_253: res
          })
        }
        break;
      case 254:
        {
          this.setData({
            result_254: res
          })
        }
        break;
      case 255:
        {
          this.setData({
            result_255: res
          })
        }
        break;
      case 256:
        {
          this.setData({
            result_256: res
          })
        }
        break;
      case 257:
        {
          this.setData({
            result_257: res
          })
        }
        break;
      case 258:
        {
          this.setData({
            result_258: res
          })
        }
        break;
      case 259:
        {
          this.setData({
            result_259: res
          })
        }
        break;
      case 260:
        {
          this.setData({
            result_260: res
          })
        }
        break;
      case 261:
        {
          this.setData({
            result_261: res
          })
        }
        break;
      case 262:
        {
          this.setData({
            result_262: res
          })
        }
        break;
      case 263:
        {
          this.setData({
            result_263: res
          })
        }
        break;
      case 264:
        {
          this.setData({
            result_264: res
          })
        }
        break;
      case 265:
        {
          this.setData({
            result_265: res
          })
        }
        break;
      case 266:
        {
          this.setData({
            result_266: res
          })
        }
        break;
      case 267:
        {
          this.setData({
            result_267: res
          })
        }
        break;
      case 268:
        {
          this.setData({
            result_268: res
          })
        }
        break;
      case 269:
        {
          this.setData({
            result_269: res
          })
        }
        break;
      case 270:
        {
          this.setData({
            result_270: res
          })
        }
        break;
      case 271:
        {
          this.setData({
            result_271: res
          })
        }
        break;
      case 272:
        {
          this.setData({
            result_272: res
          })
        }
        break;
      case 273:
        {
          this.setData({
            result_273: res
          })
        }
        break;
      case 274:
        {
          this.setData({
            result_274: res
          })
        }
        break;
      case 275:
        {
          this.setData({
            result_275: res
          })
        }
        break;
      case 276:
        {
          this.setData({
            result_276: res
          })
        }
        break;
      case 277:
        {
          this.setData({
            result_277: res
          })
        }
        break;
      case 278:
        {
          this.setData({
            result_278: res
          })
        }
        break;
      case 279:
        {
          this.setData({
            result_279: res
          })
        }
        break;
      case 280:
        {
          this.setData({
            result_280: res
          })
        }
        break;
      case 281:
        {
          this.setData({
            result_281: res
          })
        }
        break;
      case 282:
        {
          this.setData({
            result_282: res
          })
        }
        break;
      case 283:
        {
          this.setData({
            result_283: res
          })
        }
        break;
      case 284:
        {
          this.setData({
            result_284: res
          })
        }
        break;
      case 285:
        {
          this.setData({
            result_285: res
          })
        }
        break;
      case 286:
        {
          this.setData({
            result_286: res
          })
        }
        break;
      case 287:
        {
          this.setData({
            result_287: res
          })
        }
        break;
      case 288:
        {
          this.setData({
            result_288: res
          })
        }
        break;
      case 289:
        {
          this.setData({
            result_289: res
          })
        }
        break;
      case 290:
        {
          this.setData({
            result_290: res
          })
        }
        break;
      case 291:
        {
          this.setData({
            result_291: res
          })
        }
        break;
      case 292:
        {
          this.setData({
            result_292: res
          })
        }
        break;
      case 293:
        {
          this.setData({
            result_293: res
          })
        }
        break;
      case 294:
        {
          this.setData({
            result_294: res
          })
        }
        break;
      case 295:
        {
          this.setData({
            result_295: res
          })
        }
        break;
      case 296:
        {
          this.setData({
            result_296: res
          })
        }
        break;
      case 297:
        {
          this.setData({
            result_297: res
          })
        }
        break;
      case 298:
        {
          this.setData({
            result_298: res
          })
        }
        break;
      case 299:
        {
          this.setData({
            result_299: res
          })
        }
        break;
      case 300:
        {
          this.setData({
            result_300: res
          })
        }
        break;
      case 301:
        {
          this.setData({
            result_301: res
          })
        }
        break;
      case 302:
        {
          this.setData({
            result_302: res
          })
        }
        break;
      case 303:
        {
          this.setData({
            result_303: res
          })
        }
        break;
      case 304:
        {
          this.setData({
            result_304: res
          })
        }
        break;
      case 305:
        {
          this.setData({
            result_305: res
          })
        }
        break;
      case 306:
        {
          this.setData({
            result_306: res
          })
        }
        break;
      case 307:
        {
          this.setData({
            result_307: res
          })
        }
        break;
      case 308:
        {
          this.setData({
            result_308: res
          })
        }
        break;
      case 309:
        {
          this.setData({
            result_309: res
          })
        }
        break;
      case 310:
        {
          this.setData({
            result_310: res
          })
        }
        break;
      case 311:
        {
          this.setData({
            result_311: res
          })
        }
        break;
      case 312:
        {
          this.setData({
            result_312: res
          })
        }
        break;
      case 313:
        {
          this.setData({
            result_313: res
          })
        }
        break;
      case 314:
        {
          this.setData({
            result_314: res
          })
        }
        break;
      case 315:
        {
          this.setData({
            result_315: res
          })
        }
        break;
      case 316:
        {
          this.setData({
            result_316: res
          })
        }
        break;
      case 317:
        {
          this.setData({
            result_317: res
          })
        }
        break;
      case 318:
        {
          this.setData({
            result_318: res
          })
        }
        break;
      case 319:
        {
          this.setData({
            result_319: res
          })
        }
        break;
      case 320:
        {
          this.setData({
            result_320: res
          })
        }
        break;
      case 321:
        {
          this.setData({
            result_321: res
          })
        }
        break;
      case 322:
        {
          this.setData({
            result_322: res
          })
        }
        break;
      case 323:
        {
          this.setData({
            result_323: res
          })
        }
        break;
      case 324:
        {
          this.setData({
            result_324: res
          })
        }
        break;
      case 325:
        {
          this.setData({
            result_325: res
          })
        }
        break;
      case 326:
        {
          this.setData({
            result_326: res
          })
        }
        break;
      case 327:
        {
          this.setData({
            result_327: res
          })
        }
        break;
      case 328:
        {
          this.setData({
            result_328: res
          })
        }
        break;
      case 329:
        {
          this.setData({
            result_329: res
          })
        }
        break;
      case 330:
        {
          this.setData({
            result_330: res
          })
        }
        break;
      case 331:
        {
          this.setData({
            result_331: res
          })
        }
        break;
      case 332:
        {
          this.setData({
            result_332: res
          })
        }
        break;
      case 333:
        {
          this.setData({
            result_333: res
          })
        }
        break;
      case 334:
        {
          this.setData({
            result_334: res
          })
        }
        break;
      case 335:
        {
          this.setData({
            result_335: res
          })
        }
        break;
      case 336:
        {
          this.setData({
            result_336: res
          })
        }
        break;
      case 337:
        {
          this.setData({
            result_337: res
          })
        }
        break;
      case 338:
        {
          this.setData({
            result_338: res
          })
        }
        break;
      case 339:
        {
          this.setData({
            result_339: res
          })
        }
        break;
      case 340:
        {
          this.setData({
            result_340: res
          })
        }
        break;
      case 341:
        {
          this.setData({
            result_341: res
          })
        }
        break;
      case 342:
        {
          this.setData({
            result_342: res
          })
        }
        break;
      case 343:
        {
          this.setData({
            result_343: res
          })
        }
        break;
      case 344:
        {
          this.setData({
            result_344: res
          })
        }
        break;
      case 345:
        {
          this.setData({
            result_345: res
          })
        }
        break;
      case 346:
        {
          this.setData({
            result_346: res
          })
        }
        break;
      case 347:
        {
          this.setData({
            result_347: res
          })
        }
        break;
      case 348:
        {
          this.setData({
            result_348: res
          })
        }
        break;
      case 349:
        {
          this.setData({
            result_349: res
          })
        }
        break;
      case 350:
        {
          this.setData({
            result_350: res
          })
        }
        break;
      case 351:
        {
          this.setData({
            result_351: res
          })
        }
        break;
      case 352:
        {
          this.setData({
            result_352: res
          })
        }
        break;
      case 353:
        {
          this.setData({
            result_353: res
          })
        }
        break;
      case 354:
        {
          this.setData({
            result_354: res
          })
        }
        break;
      case 355:
        {
          this.setData({
            result_355: res
          })
        }
        break;
      case 356:
        {
          this.setData({
            result_356: res
          })
        }
        break;
      case 357:
        {
          this.setData({
            result_357: res
          })
        }
        break;
      case 358:
        {
          this.setData({
            result_358: res
          })
        }
        break;
      case 359:
        {
          this.setData({
            result_359: res
          })
        }
        break;
      case 360:
        {
          this.setData({
            result_360: res
          })
        }
        break;
      case 361:
        {
          this.setData({
            result_361: res
          })
        }
        break;
      case 362:
        {
          this.setData({
            result_362: res
          })
        }
        break;
      case 363:
        {
          this.setData({
            result_363: res
          })
        }
        break;
      case 364:
        {
          this.setData({
            result_364: res
          })
        }
        break;
      case 365:
        {
          this.setData({
            result_365: res
          })
        }
        break;
      case 366:
        {
          this.setData({
            result_366: res
          })
        }
        break;
      case 367:
        {
          this.setData({
            result_367: res
          })
        }
        break;
      case 368:
        {
          this.setData({
            result_368: res
          })
        }
        break;
      case 369:
        {
          this.setData({
            result_369: res
          })
        }
        break;
      case 370:
        {
          this.setData({
            result_370: res
          })
        }
        break;
      case 371:
        {
          this.setData({
            result_371: res
          })
        }
        break;
      case 372:
        {
          this.setData({
            result_372: res
          })
        }
        break;
      case 373:
        {
          this.setData({
            result_373: res
          })
        }
        break;
      case 374:
        {
          this.setData({
            result_374: res
          })
        }
        break;
      case 375:
        {
          this.setData({
            result_375: res
          })
        }
        break;
      case 376:
        {
          this.setData({
            result_376: res
          })
        }
        break;
      case 377:
        {
          this.setData({
            result_377: res
          })
        }
        break;
      case 378:
        {
          this.setData({
            result_378: res
          })
        }
        break;
      case 379:
        {
          this.setData({
            result_379: res
          })
        }
        break;
      case 380:
        {
          this.setData({
            result_380: res
          })
        }
        break;
      case 381:
        {
          this.setData({
            result_381: res
          })
        }
        break;
      case 382:
        {
          this.setData({
            result_382: res
          })
        }
        break;
      case 383:
        {
          this.setData({
            result_383: res
          })
        }
        break;
      case 384:
        {
          this.setData({
            result_384: res
          })
        }
        break;
      case 385:
        {
          this.setData({
            result_385: res
          })
        }
        break;
      case 386:
        {
          this.setData({
            result_386: res
          })
        }
        break;
      case 387:
        {
          this.setData({
            result_387: res
          })
        }
        break;
      case 388:
        {
          this.setData({
            result_388: res
          })
        }
        break;
      case 389:
        {
          this.setData({
            result_389: res
          })
        }
        break;
      case 390:
        {
          this.setData({
            result_390: res
          })
        }
        break;
      case 391:
        {
          this.setData({
            result_391: res
          })
        }
        break;
      case 392:
        {
          this.setData({
            result_392: res
          })
        }
        break;
      case 393:
        {
          this.setData({
            result_393: res
          })
        }
        break;
      case 394:
        {
          this.setData({
            result_394: res
          })
        }
        break;
      case 395:
        {
          this.setData({
            result_395: res
          })
        }
        break;
      case 396:
        {
          this.setData({
            result_396: res
          })
        }
        break;
      case 397:
        {
          this.setData({
            result_397: res
          })
        }
        break;
      case 398:
        {
          this.setData({
            result_398: res
          })
        }
        break;
      case 399:
        {
          this.setData({
            result_399: res
          })
        }
        break;
      case 400:
        {
          this.setData({
            result_400: res
          })
        }
        break;
      case 401:
        {
          this.setData({
            result_401: res
          })
        }
        break;
      case 402:
        {
          this.setData({
            result_402: res
          })
        }
        break;
      case 403:
        {
          this.setData({
            result_403: res
          })
        }
        break;
      case 404:
        {
          this.setData({
            result_404: res
          })
        }
        break;
      case 405:
        {
          this.setData({
            result_405: res
          })
        }
        break;
      case 406:
        {
          this.setData({
            result_406: res
          })
        }
        break;
      case 407:
        {
          this.setData({
            result_407: res
          })
        }
        break;
      case 408:
        {
          this.setData({
            result_408: res
          })
        }
        break;
      case 409:
        {
          this.setData({
            result_409: res
          })
        }
        break;
      case 410:
        {
          this.setData({
            result_410: res
          })
        }
        break;
      case 411:
        {
          this.setData({
            result_411: res
          })
        }
        break;
      case 412:
        {
          this.setData({
            result_412: res
          })
        }
        break;
      case 413:
        {
          this.setData({
            result_413: res
          })
        }
        break;
      case 414:
        {
          this.setData({
            result_414: res
          })
        }
        break;
      case 415:
        {
          this.setData({
            result_415: res
          })
        }
        break;
      case 416:
        {
          this.setData({
            result_416: res
          })
        }
        break;
      case 417:
        {
          this.setData({
            result_417: res
          })
        }
        break;
      case 418:
        {
          this.setData({
            result_418: res
          })
        }
        break;
      case 419:
        {
          this.setData({
            result_419: res
          })
        }
        break;
      case 420:
        {
          this.setData({
            result_420: res
          })
        }
        break;
      case 421:
        {
          this.setData({
            result_421: res
          })
        }
        break;
      case 422:
        {
          this.setData({
            result_422: res
          })
        }
        break;
      case 423:
        {
          this.setData({
            result_423: res
          })
        }
        break;
      case 424:
        {
          this.setData({
            result_424: res
          })
        }
        break;
      case 425:
        {
          this.setData({
            result_425: res
          })
        }
        break;
      case 426:
        {
          this.setData({
            result_426: res
          })
        }
        break;
      case 427:
        {
          this.setData({
            result_427: res
          })
        }
        break;
      case 428:
        {
          this.setData({
            result_428: res
          })
        }
        break;
      case 429:
        {
          this.setData({
            result_429: res
          })
        }
        break;
      case 430:
        {
          this.setData({
            result_430: res
          })
        }
        break;
      case 431:
        {
          this.setData({
            result_431: res
          })
        }
        break;
      case 432:
        {
          this.setData({
            result_432: res
          })
        }
        break;
      case 433:
        {
          this.setData({
            result_433: res
          })
        }
        break;
      case 434:
        {
          this.setData({
            result_434: res
          })
        }
        break;
      case 435:
        {
          this.setData({
            result_435: res
          })
        }
        break;
      case 436:
        {
          this.setData({
            result_436: res
          })
        }
        break;
      case 437:
        {
          this.setData({
            result_437: res
          })
        }
        break;
      case 438:
        {
          this.setData({
            result_438: res
          })
        }
        break;
      case 439:
        {
          this.setData({
            result_439: res
          })
        }
        break;
      case 440:
        {
          this.setData({
            result_440: res
          })
        }
        break;
      case 441:
        {
          this.setData({
            result_441: res
          })
        }
        break;
      case 442:
        {
          this.setData({
            result_442: res
          })
        }
        break;
      case 443:
        {
          this.setData({
            result_443: res
          })
        }
        break;
      case 444:
        {
          this.setData({
            result_444: res
          })
        }
        break;
      case 445:
        {
          this.setData({
            result_445: res
          })
        }
        break;
      case 446:
        {
          this.setData({
            result_446: res
          })
        }
        break;
      case 447:
        {
          this.setData({
            result_447: res
          })
        }
        break;
      case 448:
        {
          this.setData({
            result_448: res
          })
        }
        break;
      case 449:
        {
          this.setData({
            result_449: res
          })
        }
        break;
      case 450:
        {
          this.setData({
            result_450: res
          })
        }
        break;
      case 451:
        {
          this.setData({
            result_451: res
          })
        }
        break;
      case 452:
        {
          this.setData({
            result_452: res
          })
        }
        break;
      case 453:
        {
          this.setData({
            result_453: res
          })
        }
        break;
      case 454:
        {
          this.setData({
            result_454: res
          })
        }
        break;
      case 455:
        {
          this.setData({
            result_455: res
          })
        }
        break;
      case 456:
        {
          this.setData({
            result_456: res
          })
        }
        break;
      case 457:
        {
          this.setData({
            result_457: res
          })
        }
        break;
      case 458:
        {
          this.setData({
            result_458: res
          })
        }
        break;
      case 459:
        {
          this.setData({
            result_459: res
          })
        }
        break;
      case 460:
        {
          this.setData({
            result_460: res
          })
        }
        break;
      case 461:
        {
          this.setData({
            result_461: res
          })
        }
        break;
      case 462:
        {
          this.setData({
            result_462: res
          })
        }
        break;
      case 463:
        {
          this.setData({
            result_463: res
          })
        }
        break;
      case 464:
        {
          this.setData({
            result_464: res
          })
        }
        break;
      case 465:
        {
          this.setData({
            result_465: res
          })
        }
        break;
      case 466:
        {
          this.setData({
            result_466: res
          })
        }
        break;
      case 467:
        {
          this.setData({
            result_467: res
          })
        }
        break;
      case 468:
        {
          this.setData({
            result_468: res
          })
        }
        break;
      case 469:
        {
          this.setData({
            result_469: res
          })
        }
        break;
      case 470:
        {
          this.setData({
            result_470: res
          })
        }
        break;
      case 471:
        {
          this.setData({
            result_471: res
          })
        }
        break;
      case 472:
        {
          this.setData({
            result_472: res
          })
        }
        break;
      case 473:
        {
          this.setData({
            result_473: res
          })
        }
        break;
      case 474:
        {
          this.setData({
            result_474: res
          })
        }
        break;
      case 475:
        {
          this.setData({
            result_475: res
          })
        }
        break;
      case 476:
        {
          this.setData({
            result_476: res
          })
        }
        break;
      case 477:
        {
          this.setData({
            result_477: res
          })
        }
        break;
      case 478:
        {
          this.setData({
            result_478: res
          })
        }
        break;
      case 479:
        {
          this.setData({
            result_479: res
          })
        }
        break;
      case 480:
        {
          this.setData({
            result_480: res
          })
        }
        break;
      case 481:
        {
          this.setData({
            result_481: res
          })
        }
        break;
      case 482:
        {
          this.setData({
            result_482: res
          })
        }
        break;
      case 483:
        {
          this.setData({
            result_483: res
          })
        }
        break;
      case 484:
        {
          this.setData({
            result_484: res
          })
        }
        break;
      case 485:
        {
          this.setData({
            result_485: res
          })
        }
        break;
      case 486:
        {
          this.setData({
            result_486: res
          })
        }
        break;
      case 487:
        {
          this.setData({
            result_487: res
          })
        }
        break;
      case 488:
        {
          this.setData({
            result_488: res
          })
        }
        break;
      case 489:
        {
          this.setData({
            result_489: res
          })
        }
        break;
      case 490:
        {
          this.setData({
            result_490: res
          })
        }
        break;
      case 491:
        {
          this.setData({
            result_491: res
          })
        }
        break;
      case 492:
        {
          this.setData({
            result_492: res
          })
        }
        break;
      case 493:
        {
          this.setData({
            result_493: res
          })
        }
        break;
      case 494:
        {
          this.setData({
            result_494: res
          })
        }
        break;
      case 495:
        {
          this.setData({
            result_495: res
          })
        }
        break;
      case 496:
        {
          this.setData({
            result_496: res
          })
        }
        break;
      case 497:
        {
          this.setData({
            result_497: res
          })
        }
        break;
      case 498:
        {
          this.setData({
            result_498: res
          })
        }
        break;
      case 499:
        {
          this.setData({
            result_499: res
          })
        }
        break;
    }
  },
  select:function(){
    //
    // 查询
    //
    // 1 如果日期和车次都不是 null
    if (this.data.dateVal != '' && this.data.noVal != '') {
      wx.cloud.callFunction({
        name: 'getSelectWithDateWithNo',
        data: {
          noVal: this.data.noVal,
          dateVal: this.data.dateVal,
          currentVal: this.data.currentVal
        },
        success: res => {
          this.setResult(res.result.data)
        },
        fail: err => {
          this.setResult(null)
        }
      })
    }
    // 2 如果日期不是 '' 车次是 ''
    if (this.data.dateVal != '' && this.data.noVal == '') {
      wx.cloud.callFunction({
        name: 'getSelectWithDateWithoutNo',
        data: {
          dateVal: this.data.dateVal,
          currentVal: this.data.currentVal
        },
        success: res => {
          this.setResult(res.result.data)
        },
        fail: err => {
          this.setResult(null)
        }
      })
    }
    // 3 如果日期是 '' 车次不是 ''
    if (this.data.dateVal == '' && this.data.noVal != '') {
      wx.cloud.callFunction({
        name: 'getSelectWithoutDateWithNo',
        data: {
          noVal: this.data.noVal,
          currentVal: this.data.currentVal
        },
        success: res => {
          this.setResult(res.result.data)
        },
        fail: err => {
          this.setResult(null)
        }
      })
    }
    // 4 如果日期是 ''  车次是 ''
    if (this.data.dateVal == '' && this.data.noVal == '') {
      wx.cloud.callFunction({
        name: 'getAll',
        data: {
          currentVal: this.data.currentVal
        },
        success: res => {
          this.setResult(res.result.data)
        },
        fail: err => {
          this.setResult(null)
        }
      })
    }
  },
  copyEmail() {
    wx.setClipboardData({
      data: 'Wan_Yifan@foxmail.com',
      success() {
        wx.showToast({
          title: '邮箱地址已复制',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  getRaw(e){
    var url = e.currentTarget.dataset.index;
    wx.setClipboardData({
      data: url,
      success() {
        wx.showToast({
          title: '原文地址已复制，请粘贴到浏览器查看。',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onLoad:function(){
    wx.showLoading({
      title: 'Loading',
    })
    this.clearResult()
    var db = wx.cloud.database()
    db.collection('show').where({
      _id: 'show'
    }).get({
      success: res => {
        this.setData({
          update: '更新时间：' + res.data[0].update,
          dateTitleVal: res.data[0].dateTitleVal,
          noTitleVal: res.data[0].noTitleVal
        })
      }
    })
    db.collection('nCoV').count({
      success: res => {
        this.setData({
          count: '共有数据：' + res.total
        })
      }
    })
    this.select()
    wx.hideLoading()
  },
  onReachBottom() {
    wx.showLoading({
      title: 'Loading',
    })
    this.setData({
      currentVal:this.data.currentVal + 1
    })
    this.select()
    wx.hideLoading()
  },
  dateChange(e){
    wx.showLoading({
      title: 'Loading',
    })
    this.clearResult()
    this.setData({
      date: e.detail.value,
      dateVal: e.detail.value,
      currentVal:0
    })
    if (this.data.noVal == null) {
      this.data.noVal = ''
    }
    if (this.data.dateVal == null) {
      this.data.dateVal = ''
    }
    this.select()
    wx.hideLoading()
  },
  inputChange(e){
    wx.showLoading({
      title: 'Loading',
    })
    this.clearResult()
    this.setData({
      noVal : e.detail.value,
      currentVal:0
    })
    if (this.data.noVal == null) {
      this.data.noVal = ''
    }
    if (this.data.dateVal == null) {
      this.data.dateVal = ''
    }
    this.select()
    wx.hideLoading()
  }
})