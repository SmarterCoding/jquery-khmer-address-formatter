/*
|------------------------------------------------------------------------------------------|
| jQuery Khmer Address Formatter Plugin                                                    |
| Full coverage for Cambodian administrative units + Western to Khmer number conversion.   |
| Developement By Chamnan Dev 31/07/2026                                                   |
|------------------------------------------------------------------------------------------|
*/

(function (factory) {
  if (typeof define === "function" && define.amd) {
    /*
    |------------------------------------------------------
    | AMD. Register as an anonymous module.
    |------------------------------------------------------
    */
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    /*
    |-------------------------------------------
    | Node/CommonJS
    |-------------------------------------------
    */

    module.exports = factory(require("jquery"));
  } else {
    /*
    |-----------------------------------------------
    | Browser globals
    |-----------------------------------------------
    */

    factory(jQuery);
  }
})(function ($) {
  if (!$) {
    console.error(
      "jQuery Khmer Address Formatter requires jQuery to be loaded first.",
    );
    return;
  }

  /*
  |---------------------------------------------
  | 1. Khmer Number Mapping Dictionary
  |---------------------------------------------
  */
  const englishToKhmerDigits = {
    0: "០",
    1: "១",
    2: "២",
    3: "៣",
    4: "៤",
    5: "៥",
    6: "៦",
    7: "៧",
    8: "៨",
    9: "៩",
  };

  function convertToKhmerNumbers(str) {
    return str.replace(/[0-9]/g, (digit) => englishToKhmerDigits[digit]);
  }

  /*
  |-------------------------------------------
  | 2. Cambodian Administrative Divisions
  |-------------------------------------------
  */
  const cambodiaProvinces = [
    "ភ្នំពេញ",
    "បន្ទាយមានជ័យ",
    "បាត់ដំបង",
    "កំពង់ចាម",
    "កំពង់ឆ្នាំង",
    "កំពង់ស្ពឺ",
    "កំពង់ធំ",
    "កំពត",
    "កណ្ដាល",
    "កោះកុង",
    "ក្រចេះ",
    "មណ្ឌលគិរី",
    "ព្រះវិហារ",
    "ព្រៃវែង",
    "ពោធិ៍សាត់",
    "រតនគិរី",
    "សៀមរាប",
    "ព្រះសីហនុ",
    "ស្ទឹងត្រែង",
    "ស្វាយរៀង",
    "តាកែវ",
    "ឧត្ដរមានជ័យ",
    "កែប",
    "ប៉ៃលិន",
    "ត្បូងឃ្មុំ",
  ];

  const cambodiaSubDivisions = [
    "សិរីសោភ័ណ",
    "មង្គលបូរី",
    "ភ្នំស្រុក",
    "ព្រះនេត្រព្រះ",
    "អូរជ្រៅ",
    "ថ្មពួក",
    "ស្វាយចេក",
    "ម៉ាឡៃ",
    "ប៉ោយប៉ែត",
    "បាណន់",
    "ថ្មគោល",
    "បវែល",
    "ឯកភ្នំ",
    "មឿងឫស្សី",
    "រតនមណ្ឌល",
    "សង្កែ",
    "សំឡូត",
    "សម្ពៅលូន",
    "ភ្នំព្រឹក",
    "កំរៀង",
    "រុក្ខគិរី",
    "បាធាយ",
    "ចំការលើ",
    "ជើងព្រៃ",
    "កងមាស",
    "កោះសូទិន",
    "ស្រីសន្ធរ",
    "ស្ទឹងត្រង់",
    "ព្រៃឈរ",
    "កំពង់សៀម",
    "ស្ទឹងសែន",
    "ប្រាសាទបល្ល័ង្ក",
    "ប្រាសាទសំបូរ",
    "សណ្ដាន",
    "សន្ធុក",
    "ស្ទោង",
    "បារាយណ៍",
    "តាំងគោក",
    "កំពង់ត្រឡាច",
    "ជលគិរី",
    "កំពង់លេង",
    "បរិបូរណ៍",
    "រលៀប្អៀរ",
    "សាមគ្គីមានជ័យ",
    "បាសិត",
    "ច្បារមន",
    "គងពិសី",
    "ភ្នំស្រួច",
    "សំរោងទង",
    "ថ្ពង",
    "ឱរ៉ាល់",
    "កែវសែនជ័យ",
    "អង្គរជ័យ",
    "បន្ទាយមាស",
    "ឈូក",
    "ជុំគិរី",
    "ដងទង់",
    "កំពង់ត្រាច",
    "ទឹកឈូ",
    "កណ្ដាលស្ទឹង",
    "កៀនស្វាយ",
    "ខ្សាច់កណ្ដាល",
    "កោះធំ",
    "លើកដែក",
    "មុខកំពូល",
    "អង្គស្នួល",
    "ពញាឮ",
    "ស្រីសន្ធរ",
    "ស្អាង",
    "តាខ្មៅ",
    "បូទុមសាគរ",
    "កោះកុង",
    "ស្រែអំបិល",
    "ថ្មបាំង",
    "ខេមរភូមិន្ទ",
    "ឆ្លូង",
    "ចិត្របុរី",
    "ស្នួល",
    "សម្បូរ",
    "ព្រែកប្រសព្វ",
    "កែវសីមា",
    "កោះញែក",
    "អូររាំង",
    "ពេជ្រាដា",
    "សែនមនោរម្យ",
    "ជ័យសែន",
    "ឆែប",
    "ជាំក្សាន្ត",
    "កុំព្រៃ",
    "រវៀង",
    "សង្គមថ្មី",
    "ត្បែងមានជ័យ",
    "បាភ្នំ",
    "កញ្ជ្រៀច",
    "កំចាយមារ",
    "កំពង់ត្របែក",
    "ពារាំង",
    "ពោធិ៍រៀង",
    "ព្រះស្តេច",
    "ស្វាយអង់",
    "ស៊ីធរកណ្ដាល",
    "បាកាន",
    "កណ្ដៀង",
    "ក្រគរ",
    "ភ្នំក្រវ៉ាញ",
    "វាលវែង",
    "តាលោសែនជ័យ",
    "អណ្ដូងមាស",
    "បានលុង",
    "បារកែវ",
    "កូនមុំ",
    "លំផាត់",
    "អូរជុំ",
    "អូរយ៉ាដាវ",
    "តាវែង",
    "អង្គរជុំ",
    "អង្គរធំ",
    "បន្ទាយស្រី",
    "ជីក្រែង",
    "ក្រឡាញ់",
    "ពួក",
    "ប្រាសាទបាគង",
    "សៀមរាប",
    "សូទ្រនិគម",
    "ស្វាយលើ",
    "វារិន",
    "កំពង់សីលា",
    "ព្រៃនប់",
    "ស្ទឹងហាវ",
    "កោះរ៉ុង",
    "សេសាន",
    "សៀមបូក",
    "សៀមប៉ាង",
    "ស្ទឹងត្រែង",
    "បុរីអូរស្វាយសែនជ័យ",
    "ចន្ទ្រា",
    "កំពង់រោទិ៍",
    "រំដួល",
    "រមាសហែក",
    "ស្វាយជ្រំ",
    "ស្វាយទាប",
    "បាវិត",
    "អង្គរបូរី",
    "បាទី",
    "បូរីជលសារ",
    "កោះអណ្តែត",
    "ព្រៃកប្បាស",
    "សំរោង",
    "ត្រាំកក់",
    "ទ្រាំង",
    "ដូនកែវ",
    "អន្លង់វែង",
    "បន្ទាយអំពិល",
    "ចុងកាល់",
    "សំរោង",
    "ត្រពាំងប្រាសាទ",
    "ដំដែក",
    "កែប",
    "ប៉ៃលិន",
    "សាលាក្រៅ",
    "ត្បូងឃ្មុំ",
    "អូររាំងឪ",
    "ពញាក្រែក",
    "មេមត់",
    "ក្រូចឆ្មារ",
    "សួង",
    "អ្នកលឿង",
    "វាលរេញ",
    "ស្កន់",
    "អូរត្រេះ",
    "ឆ្នេរអូឈើទាល",
    "កោះរ៉ុងសន្លឹម",
    "បូកគោ",
    "គិរីរម្យ",
    "ពេជ្រនិល",
    "ជ្រោយចង្វារ",
    "ច្បារអំពៅ",
    "ភ្នំពេញថ្មី",
    "ទួលគោក",
    "បឹងកេងកង",
    "ចោមចៅ",
    "កាកាប",
    "ស្ទឹងមានជ័យ",
    "ឫស្សីកែវ",
    "ដង្កោ",
    "កំបូល",
    "ព្រែកព្នៅ",
    "កោះពេជ្រ",
    "អរិយក្សត្រ",
    "ស្វាយជ្រុំ",
    "បិតត្រាំង",
    "រាម",
    "អណ្ដូងថ្ម",
    "ជើងគោ",
    "តានៃ",
    "វាលស្បូវ",
    "ព្រែកប្រា",
    "ទន្លេបាសាក់",
    "តាំងក្រសាំង",
    "បាធាយ",
    "ស្កន់",
    "ជីភូ",
    "ត្រពាំងផ្លុង",
    "អូរស្មាច់",
    "ជាំ",
    "អូរជ្រៅ",
    "អូរឧកញ៉ាហេង",
    "តានៃ",
    "សាមគ្គី",
    "ទឹកថ្លា",
    "ទឹកល្អក់",
  ];

  function formatKhmerAddress(text, spacing = 2, convertNumbers = true) {
    if (!text) return "";

    const spaceStr = " ".repeat(spacing);
    let cleaned = convertNumbers ? convertToKhmerNumbers(text) : text;

    cleaned = cleaned.replace(/\s+/g, " ").trim();

    // Separate numbers from words
    cleaned = cleaned
      .replace(
        /([ភូមិ|សង្កាត់|ខណ្ឌ|ក្រុម|ផ្ទះលេខ|ផ្លូវលេខ]+)([\d\u17E0-\u17E9]+)/g,
        "$1 $2",
      )
      .replace(
        /([\d\u17E0-\u17E9]+)(សង្កាត់|ឃុំ|ស្រុក|ខណ្ឌ|ក្រុង|ខេត្ត|រាជធានី|ភូមិ)/g,
        `$1${spaceStr}$2`,
      );

    // Add spacing before admin keywords
    const adminKeywords = [
      "រាជធានី",
      "សង្កាត់",
      "ខេត្ត",
      "ក្រុង",
      "ស្រុក",
      "ខណ្ឌ",
      "ឃុំ",
      "ភូមិ",
      "ក្រុម",
      "ផ្លូវលេខ",
      "ផ្ទះលេខ",
    ];
    adminKeywords.forEach((word) => {
      const regex = new RegExp(`([^\\s])(${word})`, "g");
      cleaned = cleaned.replace(regex, `$1${spaceStr}$2`);
    });

    // Dynamic administrative unit prefix spacing
    cleaned = cleaned.replace(
      /([^\\s])(ភូមិ|ឃុំ|ស្រុក|ខេត្ត|ខណ្ឌ|សង្កាត់|ក្រុង)([\u1780-\u17D2]+)/g,
      `$1${spaceStr}$2$3`,
    );

    // Match locations
    const allLocations = [...cambodiaProvinces, ...cambodiaSubDivisions].sort(
      (a, b) => b.length - a.length,
    );
    const locationPattern = new RegExp(
      `([^\\s])(${allLocations.join("|")})`,
      "g",
    );
    cleaned = cleaned.replace(locationPattern, `$1${spaceStr}$2`);

    return cleaned.replace(/\s+/g, spaceStr).trim();
  }

  // Attach as jQuery plugin
  $.fn.khmerAddressFormatter = function (options) {
    const settings = $.extend(
      {
        event: "blur",
        spacing: 2,
        convertNumbers: true,
        onFormat: null,
      },
      options,
    );

    return this.each(function () {
      const $input = $(this);

      function applyFormat() {
        const originalVal = $input.val();
        const formattedVal = formatKhmerAddress(
          originalVal,
          settings.spacing,
          settings.convertNumbers,
        );

        if (originalVal !== formattedVal) {
          $input.val(formattedVal);
        }

        if (typeof settings.onFormat === "function") {
          settings.onFormat.call($input, formattedVal);
        }
      }

      $input.on(settings.event, applyFormat);
      $input.on("keypress", function (e) {
        if (e.which === 13) {
          applyFormat();
        }
      });
    });
  };

  // Utility method
  $.formatKhmerAddress = formatKhmerAddress;

  return $;
});
