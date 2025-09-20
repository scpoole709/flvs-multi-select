export class JsonDefinitions {
}

export enum JXType
{
  Tag,
  Attribute,
  Comment
}

export class JXDefinition {
  option: string;
  displayOption: string;
  tooltip: string;
  ctrlType: string;
  defType: string;     // Tag, Attribute
  possibilities = [];
  example?:string;
  toString(){
    return this.displayOption;
  }
}

export class JsonDef {
  static searchAll(item:string)
  {
    for (var i = 0; i < ElementDefinitions.length; i++){
      if (ElementDefinitions[i].option == item)
        return ElementDefinitions[i];
    };
    for (var i = 0; i < ImposerElements.length; i++){
      if (ImposerElements[i].option == item)
        return ImposerElements[i];
    };
    for (var i = 0; i < ImposerAttributes.length; i++){
      if (ImposerAttributes[i].option == item)
        return ImposerAttributes[i];
    };
    return undefined;
  }

  static findElement(item:string)
  {
    for (var i = 0; i < ElementDefinitions.length; i++){
      if (ElementDefinitions[i].option == item)
        return ElementDefinitions[i];
    };
    return undefined;
  }

  static findImposerElement(item:string)
  {
    for (var i = 0; i < ImposerElements.length; i++){
      if (ImposerElements[i].option == item)
        return ImposerElements[i];
    };
    return undefined;
  }

  static findImposerAttribute(item:string)
  {
    for (var i = 0; i < ImposerAttributes.length; i++){
      if (ImposerAttributes[i].option == item)
        return ImposerAttributes[i];
    };
    return undefined;
  }

  static findResource(item:string)
  {
    for (var i = 0; i < ResourceDefinitions.length; i++){
      if (ResourceDefinitions[i].option == item)
        return ResourceDefinitions[i];
    };
    return undefined;
  }

  static findAttribute(item:string)
  {
    for (var i = 0; i < AttributeDefinitions.length; i++){
      if (AttributeDefinitions[i].option == item)
        return AttributeDefinitions[i];
    };
    return undefined;
  }

  static findLink(item:string)
  {
    for (var i = 0; i < LinkDefinitions.length; i++){
      if (LinkDefinitions[i].option == item)
        return LinkDefinitions[i];
    };

    return undefined;
  }
}

export const RefAttributes = ["rRef","Part"];

export const ResourceDefinitions: JXDefinition[] = [
  {
    "option": "BarcodeDetails",
    "displayOption": "BarcodeDetails",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","BarcodeVersion","ErrorCorrectionLevel","XCells","YCells"]
  },
  {
    "option": "ColorSpaceConversionParams",
    "displayOption": "ColorSpaceConversionParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","ColorantSetName","Color","ColorManagementSystem","ICCProfileUsage",
                      "ColorSpaceConversionOp","FileSpec"]
  },
  {
    "option": "Comment",
    "displayOption": "Comment",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["AgentName", "AgentVersion", "Attribute", "Author", "Box", "ID", "Language", "Name",
                      "Path", "TimeStamp"]
  },
  {
    "option": "Component",
    "displayOption": "Component",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","AssemblyIDs", "Automation","CartonTopFlops","Columns","ComponentType",
                      "Dimensions","IsWaste","MaxHeat","Overfold","OverfoldSide","PageListIndex",
                      "ProductType","ProductTypeDetails","ReaderPageCount","SheetPort","SourceRibbon",
                      "SourceSheet","SourceWeb","SpineThickness","SurfaceCount","Transformation",
                      "WindingResult","Assembly","Bundle","Disjointing","Layout","Media","PageList","Sheet"]
  },
  {
    "option": "CustomerInfo",
    "displayOption": "CustomerInfo",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","BillingCode","CustomerID","CustomerJobName","CustomerProjectID","Contact","Company", "CustomerOrderID", "CustomerMessage"]
  },
  {
    "option": "DeviceMark",
    "displayOption": "DeviceMark",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","Font","FontSize","HorizontalFitPolicy","MarkJustification",
                      "MarkOffset","MarkOrientation","MarkPosition","VerticalFitPolicy",
                      "BarcodeReproParams"]
  },
  {
    "option": "Device",
    "displayOption": "Device",
    "ctrlType": "text",
    "tooltip": "New device link category",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","SheetName","Separation","RunIndex"]
  },
  {
    "option": "DigitalPrintingParams",
    "displayOption": "DigitalPrintingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","Collate","DirectProofAmount","ManualFeed","NonPrintableMarginBottom","NonPrintableMarginLeft",
                      "NonPrintableMarginRight","NonPrintableMarginTop","OutputBin","PageDelivery","PrintingType",
                      "PrintPass","PrintQuality","SheetLay","Sides","StackAmount","ApprovalParams","Component",
                      "Disjointing","Ink","Media","MediaSource"]
  },
  {
    "option": "IdentificationField",
    "displayOption": "IdentificationField",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","BoundingBox","Encoding","EncodingDetails","Format","Orientation","Page","Position",
                      "Purpose","PurposeDetails","Value","ValueFormat","ValueTemplate","BarcodeDetails",
                      "ExtraValues","MetadataMap"]
  },
  {
    "option": "Layout",
    "displayOption": "Layout",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","Automated","BaseOrdReset","LockOrigins","MaxCollect","MinCollect","Name",
                      "NonPrintableMarginBottom","NonPrintableMarginLeft","NonPrintableMarginRight","NonPrintableMarginTop",
                      "OrdsConsumed","SheetCountReset","SheetNameFormat","SheetNameTemplate","SourceWorkStyle",
                      "SurfaceContentsBox","TemplateType","LogicalStackParams","Media","PageCondition","PlacedObject",
                      "SheetCondition","Signature","TransferCurvePool"]
  },
  {
    "option": "LayoutPreparationParams",
    "displayOption": "LayoutPreparationParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","BindingEdge","BackMarkList","CreepValue","FinishingOrder","FoldCatalog","FoldCatalogOrientation",
                      "FrontMarkList","Gutter","GutterMinimumLimit","HorizontalCreep","ImplicitGutter","ImplicitGutterMinimum",
                      "NumberUp","PageDistributionScheme","PageOrder","PresentationDirection","Rotate","Sides","StackDepth",
                      "StepDocs","StepRepeat","SurfaceContentsBox","VerticalCreep","DeviceMark","ExternalImpositionTemplate",
                      "FitPolicy","ImageShift","InsertSheet","JobField","Media","PageCell"]
  },
  {
    "option": "LaminatingParams",
    "displayOption": "LaminatingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["AdhesiveType", "GapList", "HardenerType", "LaminatingBox", "LaminatingMethod", "ModuleIndex",
                      "NipWidth", "Temperature"]
  },
  {
    "option": "CoverApplicationParams",
    "displayOption": "CoverApplicationParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["GlueApplication", "Score"]
  },
  {
    "option": "CuttingParams",
    "displayOption": "CuttingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["NUpSeparation", "SheetLay", "Cut", "CutBlock", "FileSpec"]
  },
  {
    "option": "FoldingParams",
    "displayOption": "FoldingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["FoldCatalog", "SheetLay", "FileSpec", "Fold"]
  },
  {
    "option": "GatheringParams",
    "displayOption": "GatheringParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Disjointing"]
  },
  {
    "option": "HoleMakingParams",
    "displayOption": "HoleMakingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Center", "CenterReference", "Extent", "HoleCount", "HoleType", "Shape", "Hole", "HoleLine", "RegisterMark"]
  },
  {
    "option": "PerforatingParams",
    "displayOption": "PerforatingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Perforate"]
  },
  {
    "option": "SpineTapingParams",
    "displayOption": "SpineTapingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["HorizontalExcess", "HorizontalExcessBack", "StripBrand", "StripColor", "StripColorDetails",
                      "StripLength", "StripMaterial", "TopExcess", "GlueApplication"]
  },
  {
    "option": "StackingParams",
    "displayOption": "StackingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["BundleDepth", "Compensate", "LayerAmount", "LayerCompression", "LayerLift", "MaxAmount", "MaxHeight",
                      "MaxWeight", "MinAmount", "PreStackAmount", "PreStackMethod", "StackCompression", "StandardAmount",
                      "UnderLays", "Disjointing"]
  },
  {
    "option": "StitchingParams",
    "displayOption": "StitchingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Angle", "NumberOfStitches", "Offset", "ReferenceEdge", "StapleShape", "StitchOrigin", "StitchPositions",
                      "StitchType", "StitchWidth", "TightBacking", "WireBrand", "WireGauge", "FileSpec"]
  },
  {
    "option": "TrimmingParams",
    "displayOption": "TrimmingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Height", "TrimCover", "Width"]
  },
  {
    "option": "Media",
    "displayOption": "Media",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["ID","Class","Usage","Status","DescriptiveName","MediaName","MediaPrintModeName","Orientation","Dimension",
                      "Weight","Thickness","MediaColorName","MediaFamily","CustomMediaType","HoleType","MediaSetCount","DeviceProductID"]
                   /* "BackBrightness","BackCoatingDetail","BackCoatings","BackGlossValue","BackISOPaperSubstrate",
                      "Brightness","CIETint","CIEWhiteness","CoreWeight","Dimension","Flute","FluteDirection",
                      "FrontCoatingDetail","FrontCoatings","FrontGlossValue","Grade","GrainDirection","HoleCount",
                      "ImagableSide","InnerCoreDiameter","InsideLoss","ISOPaperSubstrate","LabColorValue",
                      "MediaColorName","MediaColorNameDetails","MediaQuality","MediaType","MediaTypeDetails",
                      "MediaUnit","Opacity","OpacityLevel","OuterCoreDiameter","OutsiceGain","PlateTechnology","Polarity",
                      "PrePrinted","PrintingTechnology","Recycled","RecycledPercentage","ReliefThickness","RollDiameter",
                      "ShrinkIndex", "SleeveInterlock","StockType","Texture","UserMediaType","WrapperWeight",
                      "Certification","ColorMeasurementConditions","HoleList","MediaLayers","TabDimensions"] */
  },
  {
    "option": "RunList",
    "displayOption": "RunList",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "RESOURCE",
    "possibilities": ["Class","Usage","Automation","ComponentGranularity","Directory","DocCopies","DocNames","Docs","EndOfBundleItem",
                      "EndOfDocument","EndOfSet","FinishedPages","FirstPage","IgnoreContext","IsPage","LogicalPage",
                      "NDoc","NPage","NSet","PageCopies","PageListIndex","PageNames","Pages","RunTag","SetCopies",
                      "SetNames","Sets","SheetSides","SkipPage","Sorted","ByteMap","Disposition","DynamicInput",
                      "InsertSheet","InterpretedPDLData","LayoutElement","MetadataMap","PageList"]
  }  ​
];

export const LinkAttributes = ["ActualAmount","Amount","CombinedProcessIndex","CombinedProcessType","DraftOK",
                               "Duration","MaxAmount","MinAmount","MinLateStatus","MinStatus","Orientation",
                               "PipePartIDKeys","PipePause","PipeResume","PipeURL","ProcessUsage","Recommendation",
                               "rRef","Start","StartOffset","Usage","Transformation","AmountPool","Part"];

export const LinkDefinitions: JXDefinition[] = [
  {
    "option": "DeviceLink",
    "displayOption": "Device",
    "ctrlType": "text",
    "tooltip": "New device link category",
    "defType": "LINK",
    "possibilities": LinkAttributes
  },
  {
    "option": "CustomerInfoLink",
    "displayOption": "CustomerInfo",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "LINK",
    "possibilities": LinkAttributes
  },
  {
    "option": "LayoutLink",
    "displayOption": "Layout",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "LINK",
    "possibilities": LinkAttributes
  },
  {
    "option": "LayoutPreparationParamsLink",
    "displayOption": "LayoutPreparationParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "LINK",
    "possibilities": LinkAttributes
  },
  {
    "option": "RunListLink",
    "displayOption": "RunList",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "LINK",
    "possibilities": LinkAttributes
  },
  {
    "option": "MediaLink",
    "displayOption": "Media",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "LINK",
    "possibilities": LinkAttributes
  },
  {
    "option": "DigitalPrintingParamsLink",
    "displayOption": "DigitalPrintingParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "LINK",
    "possibilities": LinkAttributes
  },
  {
    "option": "ComponentLink",
    "displayOption": "Component",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "LINK",
    "possibilities": LinkAttributes
  }
];

export const ElementDefinitions: JXDefinition[] = [
  {
    "option": "BarcodeReproParams",
    "displayOption": "BarcodeReproParams",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "ELEMENT",
    "possibilities": ["BearerBars", "Height", "Magnification", "Masking","ModuleHeight", "Ratio", "BarcodeCompPrams"]
  },
  {
    "option": "ContentObject",
    "displayOption": "ContentObject",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "ELEMENT",
    "possibilities": ["Anchor", "ClipBox", "ClipBoxFormat", "ClipBoxTemplate",
                      "CompensationCTMFormat", "CompensationCTMTemplate", "CTM",
                      "HalfTonePhaseOrigin", "LayerID", "LogicalStackOrd, OrdID",
                      "SourceClipPath", "TrimClipPath","TrimCTM", "TrimSize", "Type",
                      "DocOrd", "ID", "Ord", "OrdExpression", "SetOrd"]
  },
  {
    "option": "FileSpec",
    "displayOption": "FileSpec",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "ELEMENT",
    "possibilities": ["AppOS", "AppVersion", "CheckSum", "Compression","Disposition", "DocumentNaturalLang",
                      "Encoding", "FileFormat", "FileSize", "FileTargetDeviceModel", "FileTemplate", "FileVersion",
                      "MimeType", "MimeTypeVersion","OSVersion","OverwritePolicy","PageOrder","Password",
                      "RequestQuality", "ResourceUsage","SearchDepth","UID","URL","UserFileName","Container",
                      "Disposition","FileAlias"]
  },
  {
    "option": "JDF",
    "displayOption": "JDF",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "ELEMENT",
    "possibilities": ["Activation", "Category","ICSVersions","ID","JobID", "JobPartID", "ProjectID", "RelatedJobID",
                      "RelatedJobPartID", "SpawnID", "Status", "StatusDetails", "Template", "TemplateID", "TemplateVersion",
                      "Type", "Types", "Version", "xmlns", "xsi:type"]
  },
  {
    "option": "JobField",
    "displayOption": "JobField",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "ELEMENT",
    "possibilities": ["JobFormat", "JobTemplate","OperatorText","ShowList","UserText"]
  },
  {
    "option": "LayoutElement",
    "displayOption": "LayoutElement",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "ELEMENT",
    "possibilities": ["ClipPath","ContentDataRefs","ElementType","HasBleeds","IgnorePDLCopies",
                      "IgnorePDLImposition","IsBlank","IsPrintable","IsTrapped","PageListIndex",
                      "SetLevel","SourceClipBox","SourceTrimBox","Template","ColorPool","ContentList",
                      "Dependencies","ElementColorParam","FileSpec","ImageCompressionParams","PageList",
                      "ScreenParams","SeparationSpec"]
  },
  {
    "option": "MarkObject",
    "displayOption": "MarkObject",
    "ctrlType": "text",
    "tooltip": "",
    "defType": "ELEMENT",
    "possibilities": ["Anchor", "ClipBox", "ClipBoxFormat", "ClipBoxTemplate",
                      "CompensationCTMFormat", "CompensationCTMTemplate", "CTM",
                      "HalfTonePhaseOrigin", "LayerID", "LogicalStackOrd, OrdID",
                      "SourceClipPath", "TrimClipPath","TrimCTM", "TrimSize", "Type",
                      "DocOrd", "ID", "Ord", "OrdExpression", "SetOrd"]
  }
];

export const AttributeDefinitions: JXDefinition[] = [
    {
        "option": "~NEWATTRIBUTE~",
        "displayOption": "Create Attribute",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "ActionRefs",
        "displayOption": "ActionRefs",
        "ctrlType": "spanColumn",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "TrueActionRefs",
        "displayOption": "TrueActionRefs",
        "ctrlType": "spanColumn",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "FalseActionRefs",
        "displayOption": "FalseActionRefs",
        "ctrlType": "spanColumn",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Activation",
        "displayOption": "Activation",
        "ctrlType": "spanColumn",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
      "option": "Usage",
      "displayOption": "Usage",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": [ "Input", "Output" ]
    },
    {
      "option": "ProcessUsage",
      "displayOption": "ProcessUsage",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": [ "Input", "Output" ]
    },
    {
        "option": "rRef",
        "displayOption": "rRef",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [ ]
    },
    {
        "option": "Class",
        "displayOption": "Class",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Font",
        "displayOption": "Font",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "FontSize",
        "displayOption": "FontSize",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "UserText",
        "displayOption": "UserText",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "CTM",
        "displayOption": "CTM",
        "ctrlType": "span6Space",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "CompensationCTMFormat",
        "displayOption": "CompensationCTMFormat",
        "ctrlType": "span6Space",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ],
        "example":"0 0 0 0 %1d %1d"
    },
    {
        "option": "CompensationCTMTemplate",
        "displayOption": "CompensationCTMTemplate",
        "ctrlType": "spanColumnComma",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ],
        "example":"0,0"
    },
    {
        "option": "CopyConstant",
        "displayOption": "CopyConstant",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "FillBox",
        "displayOption": "FillBox",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "FillBoxConstant",
        "displayOption": "FillBoxConstant",
        "ctrlType": "span4Space",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "FillColorCMYKConstant",
        "displayOption": "FillColorCMYKConstant",
        "ctrlType": "span4Space",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "InsertPage",
        "displayOption": "InsertPage",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "InsertPageNumber",
        "displayOption": "InsertPageNumber",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "ComponentType",
        "displayOption": "ComponentType",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Expression",
        "displayOption": "Expression",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "ClipBox",
        "displayOption": "Clipbox",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Ord",
        "displayOption": "Ord",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "OrdExpression",
        "displayOption": "OrdExpression",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Copy",
        "displayOption": "Copy",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "CopyTarget",
        "displayOption": "CopyTarget",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "FalseActionRefs",
        "displayOption": "FalseActionRefs",
        "ctrlType": "spanColumn",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "TrueActionRefs",
        "displayOption": "TrueActionRefs",
        "ctrlType": "spanColumn",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "SurfaceContentsBox",
        "displayOption": "SurfaceContentsBox",
        "ctrlType": "span4Space",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "SheetName",
        "displayOption": "SheetName",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "PrintingType",
        "displayOption": "PrintingType",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "PageDelivery",
        "displayOption": "PageDelivery",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "TrimSize",
        "displayOption": "TrimSize",
        "ctrlType": "span2Space",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
      "option": "MediaSetCount",
      "displayOption": "MediaSetCount",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": [""
      ]
    },
    {
      "option": "MediaType",
      "displayOption": "MediaType",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": [""
      ]
    },
    {
      "option": "MediaTypeDetails",
      "displayOption": "MediaTypeDetails",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": [""
      ]
    },
    {
        "option": "ID",
        "displayOption": "ID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Sides",
        "displayOption": "Sides",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [ 'OneSidedBackFlipX', 'OneSidedBackFlipY', 'OneSidedFront', 'TwoSidedFlipX', 'TwoSidedFlipY' ]
    },
    {
        "option": "Status",
        "displayOption": "Status",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "StatusDetails",
        "displayOption": "StatusDetails",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "DescriptiveName",
        "displayOption": "DescriptiveName",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "MediaColorNameDetails",
        "displayOption": "MediaColorNameDetails",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Collate",
        "displayOption": "Collate",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Dimension",
        "displayOption": "Dimension",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Weight",
        "displayOption": "Weight",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "EncodingDetails",
        "displayOption": "EncodingDetails",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Encoding",
        "displayOption": "Encoding",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "ValueTemplate",
        "displayOption": "ValueTemplate",
        "ctrlType": "spanColumnComma",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Encoding",
        "displayOption": "Encoding",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "DeviceID",
        "displayOption": "DeviceID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "CustomerJobName",
        "displayOption": "CustomerJobName",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "CustomerOrderID",
        "displayOption": "CustomerOrderID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "Company",
        "displayOption": "Company",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "BillingCode",
        "displayOption": "BillingCode",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "ContactTypes",
        "displayOption": "ContactTypes",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "OrganizationName",
        "displayOption": "OrganizationName",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "PartIDKeys",
        "displayOption": "PartIDKeys",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "Automated",
        "displayOption": "Automated",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "FirstName",
        "displayOption": "FirstName",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "FamilyName",
        "displayOption": "FamilyName",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "Name",
        "displayOption": "Name",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "Pages",
        "displayOption": "Pages",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "MimeType",
        "displayOption": "MimeType",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
        "option": "URL",
        "displayOption": "URL",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": []
    },
    {
      "option": "Category",
      "displayOption": "Category",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": []
    },
    {
      "option": "CustomerOrderID",
      "displayOption": "CustomerOrderID",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": []
    },
    {
        "option": "ICSVersions",
        "displayOption": "ICSVersions",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
      "option": "Type",
      "displayOption": "Type",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": []
    },
    {
      "option": "Types",
      "displayOption": "Types",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": []
    },
    {
      "option": "Version",
      "displayOption": "Version",
      "ctrlType": "spanDefault",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": []
    },
    {
        "option": "JobID",
        "displayOption": "JobID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "JobPartID",
        "displayOption": "JobPartID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "ProjectID",
        "displayOption": "ProjectID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "RelatedJobID",
        "displayOption": "RelatedJobID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "RelatedJobPartID",
        "displayOption": "RelatedJobPartID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "SpawnID",
        "displayOption": "SpawnID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "Template",
        "displayOption": "Template",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "TemplateID",
        "displayOption": "TemplateID",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "TemplateType",
        "displayOption": "TemplateType",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "TemplateVersion",
        "displayOption": "TemplateVersion",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "xmlns",
        "displayOption": "xmlns",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    },
    {
        "option": "xsi:type",
        "displayOption": "xsi:type",
        "ctrlType": "spanDefault",
        "tooltip": "",
        "defType": "ATTRIBUTE",
        "possibilities": [  ]
    }
  ];

  export const ImposerElements: JXDefinition[] = [
    {
      "option": "JDFImposer:Action",
      "displayOption": "JDFImposer:Action",
      "ctrlType": "text",
      "tooltip": "",
      "defType": "ELEMENT",
      "possibilities": ["Copy", "CopyTarget","CopyConstant","Expression", "ID", "FillBox", "FillBoxConstant",
                        "FillColorCMYKConstant"]
    },
    {
      "option": "JDFImposer:Test",
      "displayOption": "JDFImposer:Test",
      "ctrlType": "text",
      "tooltip": "",
      "defType": "ELEMENT",
      "possibilities": ["ID", "ActionRefs", "Expression", "TrueActionRefs", "FalseActionRefs"]
    }
  ];

  export const ImposerAttributes: JXDefinition[] = [
    {
      "option": "JDFImposer:TestBeforeObjectRefs",
      "displayOption": "JDFImposer:TestBeforeObjectRefs",
      "ctrlType": "text",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": []
    },{
      "option": "JDFImposer:TestAfterObjectRefs",
      "displayOption": "JDFImposer:TestAfterObjectRefs",
      "ctrlType": "text",
      "tooltip": "",
      "defType": "ATTRIBUTE",
      "possibilities": []
    }
  ];
