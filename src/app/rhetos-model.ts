/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* tslint:disable:no-empty-interface class-name no-namespace */

import { createStructureInfo, createFunctionInfo, createComplexInfo, createComplexGetInfo } from '@ngx-floyd/rhetos';



export namespace Bookstore {

    export const ApproveShipmentInfo = createStructureInfo<Bookstore.ApproveShipment>('Bookstore/ApproveShipment');
    export interface ApproveShipment {
        ID: string;
        EffectiveSince?: Date;
        Explanation: string;
        ShipmentID?: string;
    }

    export const BookInfo = createStructureInfo<Bookstore.Book>('Bookstore/Book');
    export interface Book {
        ID: string;
        BookName?: string;
        Code?: string;
        NumberOfPages?: number;
        Title: string;
        AssignedToID?: string;
        AuthorID?: string;
        Price?: number;
    }

    export const BookAuthorInfo = createStructureInfo<Bookstore.BookAuthor>('Bookstore/BookAuthor');
    export interface BookAuthor {
        ID: string;
        BookID?: string;
        AuthorID?: string;
    }

    export const BookInfoInfo = createStructureInfo<Bookstore.BookInfo>('Bookstore/BookInfo');
    export interface BookInfo {
        ID: string;
        NumberOfChapters?: number;
    }

    export const BookTopicInfo = createStructureInfo<Bookstore.BookTopic>('Bookstore/BookTopic');
    export interface BookTopic {
        ID: string;
        BookID?: string;
        TopicID: string;
    }

    export const ChapterInfo = createStructureInfo<Bookstore.Chapter>('Bookstore/Chapter');
    export interface Chapter {
        ID: string;
        BookID?: string;
        Heading?: string;
    }

    export const CommentInfo = createStructureInfo<Bookstore.Comment>('Bookstore/Comment');
    export interface Comment {
        ID: string;
        BookID?: string;
        Text?: string;
    }

    export const CommonMisspellingInfo = createStructureInfo<Bookstore.CommonMisspelling>('Bookstore/CommonMisspelling');
    export interface CommonMisspelling {
    }

    export const ComputeBookInfoInfo = createStructureInfo<Bookstore.ComputeBookInfo>('Bookstore/ComputeBookInfo');
    export interface ComputeBookInfo {
        ID: string;
        NumberOfChapters?: number;
    }

    export const ComputeShipmentCurrentStateInfo = createStructureInfo<Bookstore.ComputeShipmentCurrentState>('Bookstore/ComputeShipmentCurrentState');
    export interface ComputeShipmentCurrentState {
        ID: string;
        StatusID?: string;
    }

    export const CreateBooksInfo = createStructureInfo<Bookstore.CreateBooks>('Bookstore/CreateBooks');
    export interface CreateBooks {
        BookName?: string;
        NumberOfBooks?: number;
        Title?: string;
    }

    export const DeliveryFinishedInfo = createStructureInfo<Bookstore.DeliveryFinished>('Bookstore/DeliveryFinished');
    export interface DeliveryFinished {
        ID: string;
        EffectiveSince?: Date;
        ShipmentID?: string;
    }

    export const DeliveryStartedInfo = createStructureInfo<Bookstore.DeliveryStarted>('Bookstore/DeliveryStarted');
    export interface DeliveryStarted {
        ID: string;
        EffectiveSince?: Date;
        ShipmentID?: string;
    }

    export const DepartmentInfo = createStructureInfo<Bookstore.Department>('Bookstore/Department');
    export interface Department {
        ID: string;
        Active?: boolean;
        Code: string;
        Description?: string;
    }

    export const EducationRecordInfo = createStructureInfo<Bookstore.EducationRecord>('Bookstore/EducationRecord');
    export interface EducationRecord {
        ID: string;
        Date?: Date;
        Description?: string;
    }

    export const EmployeeInfo = createStructureInfo<Bookstore.Employee>('Bookstore/Employee');
    export interface Employee {
        ID: string;
        Created?: Date;
        Name?: string;
        Phone?: string;
        UserName?: string;
        VATNumber?: string;
    }

    export const EmployeeDepartmentInfo = createStructureInfo<Bookstore.EmployeeDepartment>('Bookstore/EmployeeDepartment');
    export interface EmployeeDepartment {
        ID: string;
        DepartmentID?: string;
        EmployeeID?: string;
    }

    export const FoodInfo = createStructureInfo<Bookstore.Food>('Bookstore/Food');
    export interface Food {
        ID: string;
        Calories?: number;
        Code?: string;
        Description?: string;
        Price: number;
    }

    export const LongBooksInfo = createStructureInfo<Bookstore.LongBooks>('Bookstore/LongBooks');
    export interface LongBooks {
        NumberOfPages?: number;
    }

    export const ManagerInfo = createStructureInfo<Bookstore.Manager>('Bookstore/Manager');
    export interface Manager {
        ID: string;
        Bonuses?: string;
    }

    export const PersonInfo = createStructureInfo<Bookstore.Person>('Bookstore/Person');
    export interface Person {
        ID: string;
        Name?: string;
        VATNumber: string;
    }

    export const Phone_RegExMatchFilterInfo = createStructureInfo<Bookstore.Phone_RegExMatchFilter>('Bookstore/Phone_RegExMatchFilter');
    export interface Phone_RegExMatchFilter {
    }

    export const SalesItemInfo = createStructureInfo<Bookstore.SalesItem>('Bookstore/SalesItem');
    export interface SalesItem {
        ID: string;
        BookID?: string;
        Code?: string;
        Description?: string;
        FoodID?: string;
        Subtype?: string;
        Price?: number;
    }

    export const SalesItem_MaterializedInfo = createStructureInfo<Bookstore.SalesItem_Materialized>('Bookstore/SalesItem_Materialized');
    export interface SalesItem_Materialized {
        ID: string;
    }

    export const SalesItemCommentInfo = createStructureInfo<Bookstore.SalesItemComment>('Bookstore/SalesItemComment');
    export interface SalesItemComment {
        ID: string;
        Comment?: string;
        SalesItemID?: string;
    }

    export const ShipmentInfo = createStructureInfo<Bookstore.Shipment>('Bookstore/Shipment');
    export interface Shipment {
        ID: string;
        CreatedAt?: Date;
        DeliveryDate?: Date;
        TargetAddress?: string;
    }

    export const ShipmentCurrentStateInfo = createStructureInfo<Bookstore.ShipmentCurrentState>('Bookstore/ShipmentCurrentState');
    export interface ShipmentCurrentState {
        ID: string;
        StatusID?: string;
    }

    export const ShipmentEventInfo = createStructureInfo<Bookstore.ShipmentEvent>('Bookstore/ShipmentEvent');
    export interface ShipmentEvent {
        ID: string;
        ApproveShipmentID?: string;
        DeliveryFinishedID?: string;
        DeliveryStartedID?: string;
        EffectiveSince?: Date;
        ShipmentID?: string;
        ShipmentCreatingID?: string;
        Subtype?: string;
        NewStatusID?: string;
    }

    export const ShipmentItemInfo = createStructureInfo<Bookstore.ShipmentItem>('Bookstore/ShipmentItem');
    export interface ShipmentItem {
        ID: string;
        BookID?: string;
        ShipmentID?: string;
    }

    export const ShipmentStatusInfo = createStructureInfo<Bookstore.ShipmentStatus>('Bookstore/ShipmentStatus');
    export interface ShipmentStatus {
        ID: string;
        Name?: string;
    }

    export const ShipmentStatusIds = {
		Approved: '402eb487-a2c2-e090-1d87-b721bf381c3c',
		Delivered: '65156190-9073-67f3-5639-f46a572eee06',
		DeliveryInProgress: '58a29264-bc15-b88e-560a-a9593d120802',
		Preparing: 'cca61acf-5159-f4b3-9fab-29021827d202'
	};

    export const ShipmentStatusItems: Bookstore.ShipmentStatus[] = [
		{ ID: '402eb487-a2c2-e090-1d87-b721bf381c3c', Name: 'Approved' },
		{ ID: '65156190-9073-67f3-5639-f46a572eee06', Name: 'Delivered' },
		{ ID: '58a29264-bc15-b88e-560a-a9593d120802', Name: 'DeliveryInProgress' },
		{ ID: 'cca61acf-5159-f4b3-9fab-29021827d202', Name: 'Preparing' }
	];

    export const SystemRequiredActiveInfo = createStructureInfo<Bookstore.SystemRequiredActive>('Bookstore/SystemRequiredActive');
    export interface SystemRequiredActive {
    }

    export const SystemRequiredBookInfo = createStructureInfo<Bookstore.SystemRequiredBook>('Bookstore/SystemRequiredBook');
    export interface SystemRequiredBook {
    }

    export const SystemRequiredCodeInfo = createStructureInfo<Bookstore.SystemRequiredCode>('Bookstore/SystemRequiredCode');
    export interface SystemRequiredCode {
    }

    export const SystemRequiredDepartmentInfo = createStructureInfo<Bookstore.SystemRequiredDepartment>('Bookstore/SystemRequiredDepartment');
    export interface SystemRequiredDepartment {
    }

    export const SystemRequiredEmployeeInfo = createStructureInfo<Bookstore.SystemRequiredEmployee>('Bookstore/SystemRequiredEmployee');
    export interface SystemRequiredEmployee {
    }

    export const SystemRequiredSalesItemInfo = createStructureInfo<Bookstore.SystemRequiredSalesItem>('Bookstore/SystemRequiredSalesItem');
    export interface SystemRequiredSalesItem {
    }

    export const SystemRequiredShipmentInfo = createStructureInfo<Bookstore.SystemRequiredShipment>('Bookstore/SystemRequiredShipment');
    export interface SystemRequiredShipment {
    }

    export const SystemRequiredVATNumberInfo = createStructureInfo<Bookstore.SystemRequiredVATNumber>('Bookstore/SystemRequiredVATNumber');
    export interface SystemRequiredVATNumber {
    }

    export const TopicInfo = createStructureInfo<Bookstore.Topic>('Bookstore/Topic');
    export interface Topic {
        ID: string;
        Name: string;
    }

    export const SalesItemGridInfo = createStructureInfo<Bookstore.SalesItemGrid>('Bookstore/SalesItemGrid');
    export interface SalesItemGrid {
        ID: string;
        BookNumberOfPages?: number;
        Code?: string;
        Price?: number;
    }

    export const ShipmentGridInfo = createStructureInfo<Bookstore.ShipmentGrid>('Bookstore/ShipmentGrid');
    export interface ShipmentGrid {
        ID: string;
        CurrentStatus?: string;
        DeliveryDate?: Date;
        TargetAddress?: string;
    }
}

export namespace Common {

    export const AddToLogInfo = createStructureInfo<Common.AddToLog>('Common/AddToLog');
    export interface AddToLog {
        Action?: string;
        Description?: string;
        ItemId?: string;
        TableName?: string;
    }

    export const AutoCodeCacheInfo = createStructureInfo<Common.AutoCodeCache>('Common/AutoCodeCache');
    export interface AutoCodeCache {
        ID: string;
        Entity?: string;
        Grouping?: string;
        LastCode?: number;
        MinDigits?: number;
        Prefix?: string;
        Property?: string;
    }

    export const ClaimInfo = createStructureInfo<Common.Claim>('Common/Claim');
    export interface Claim {
        ID: string;
        Active?: boolean;
        ClaimResource: string;
        ClaimRight: string;
    }

    export const ExclusiveLockInfo = createStructureInfo<Common.ExclusiveLock>('Common/ExclusiveLock');
    export interface ExclusiveLock {
        ID: string;
        LockFinish: Date;
        LockStart: Date;
        ResourceID: string;
        ResourceType: string;
        UserName: string;
        Workstation: string;
    }

    export const FilterIdInfo = createStructureInfo<Common.FilterId>('Common/FilterId');
    export interface FilterId {
        ID: string;
        Handle?: string;
        Value?: string;
    }

    export const KeepSynchronizedMetadataInfo = createStructureInfo<Common.KeepSynchronizedMetadata>('Common/KeepSynchronizedMetadata');
    export interface KeepSynchronizedMetadata {
        ID: string;
        Context?: string;
        Source?: string;
        Target?: string;
    }

    export const LogInfo = createStructureInfo<Common.Log>('Common/Log');
    export interface Log {
        ID: string;
        Action: string;
        ContextInfo?: string;
        Created: Date;
        Description?: string;
        ItemId?: string;
        TableName?: string;
        UserName: string;
        Workstation: string;
    }

    export const LogReaderInfo = createStructureInfo<Common.LogReader>('Common/LogReader');
    export interface LogReader {
        ID: string;
        Action: string;
        ContextInfo?: string;
        Created: Date;
        Description?: string;
        ItemId?: string;
        TableName?: string;
        UserName: string;
        Workstation: string;
    }

    export const LogRelatedItemInfo = createStructureInfo<Common.LogRelatedItem>('Common/LogRelatedItem');
    export interface LogRelatedItem {
        ID: string;
        ItemId?: string;
        LogID: string;
        Relation?: string;
        TableName?: string;
    }

    export const LogRelatedItemReaderInfo = createStructureInfo<Common.LogRelatedItemReader>('Common/LogRelatedItemReader');
    export interface LogRelatedItemReader {
        ID: string;
        ItemId?: string;
        LogID: string;
        Relation?: string;
        TableName?: string;
    }

    export const PrincipalInfo = createStructureInfo<Common.Principal>('Common/Principal');
    export interface Principal {
        ID: string;
        Name: string;
    }

    export const PrincipalHasRoleInfo = createStructureInfo<Common.PrincipalHasRole>('Common/PrincipalHasRole');
    export interface PrincipalHasRole {
        ID: string;
        PrincipalID: string;
        RoleID: string;
    }

    export const PrincipalPermissionInfo = createStructureInfo<Common.PrincipalPermission>('Common/PrincipalPermission');
    export interface PrincipalPermission {
        ID: string;
        ClaimID: string;
        IsAuthorized: boolean;
        PrincipalID: string;
    }

    export const RelatedEventsSourceInfo = createStructureInfo<Common.RelatedEventsSource>('Common/RelatedEventsSource');
    export interface RelatedEventsSource {
        ID: string;
        Action: string;
        ContextInfo?: string;
        Created: Date;
        Description?: string;
        ItemId?: string;
        LogID?: string;
        RelatedToItem?: string;
        RelatedToTable?: string;
        Relation?: string;
        TableName?: string;
        UserName: string;
        Workstation: string;
    }

    export const ReleaseLockInfo = createStructureInfo<Common.ReleaseLock>('Common/ReleaseLock');
    export interface ReleaseLock {
        ResourceID?: string;
        ResourceType?: string;
    }

    export const RoleInfo = createStructureInfo<Common.Role>('Common/Role');
    export interface Role {
        ID: string;
        Name: string;
    }

    export const RoleInheritsRoleInfo = createStructureInfo<Common.RoleInheritsRole>('Common/RoleInheritsRole');
    export interface RoleInheritsRole {
        ID: string;
        PermissionsFromID: string;
        UsersFromID: string;
    }

    export const RolePermissionInfo = createStructureInfo<Common.RolePermission>('Common/RolePermission');
    export interface RolePermission {
        ID: string;
        ClaimID: string;
        IsAuthorized: boolean;
        RoleID: string;
    }

    export const SetLockInfo = createStructureInfo<Common.SetLock>('Common/SetLock');
    export interface SetLock {
        ResourceID?: string;
        ResourceType?: string;
    }

    export const SystemRequiredActiveInfo = createStructureInfo<Common.SystemRequiredActive>('Common/SystemRequiredActive');
    export interface SystemRequiredActive {
    }

    export const SystemRequiredClaimInfo = createStructureInfo<Common.SystemRequiredClaim>('Common/SystemRequiredClaim');
    export interface SystemRequiredClaim {
    }

    export const SystemRequiredLogInfo = createStructureInfo<Common.SystemRequiredLog>('Common/SystemRequiredLog');
    export interface SystemRequiredLog {
    }

    export const SystemRequiredPrincipalInfo = createStructureInfo<Common.SystemRequiredPrincipal>('Common/SystemRequiredPrincipal');
    export interface SystemRequiredPrincipal {
    }

    export const SystemRequiredRoleInfo = createStructureInfo<Common.SystemRequiredRole>('Common/SystemRequiredRole');
    export interface SystemRequiredRole {
    }

    export const SystemRequiredUsersFromInfo = createStructureInfo<Common.SystemRequiredUsersFrom>('Common/SystemRequiredUsersFrom');
    export interface SystemRequiredUsersFrom {
    }

    export const MyClaimInfo = createStructureInfo<Common.MyClaim>('Common/MyClaim');
    export interface MyClaim {
        ID: string;
        Applies?: boolean;
    }
}

export namespace Demo {

    export const EInfo = createStructureInfo<Demo.E>('Demo/E');
    export interface E {
        ID: string;
        B?: string;
    }
}

export namespace Floyd {

    export const GetStorageInfo = createStructureInfo<Floyd.GetStorage>('Floyd/GetStorage');
    export interface GetStorage {
        ID: string;
        Key?: string;
        Value?: string;
    }

    export const MyClaimsInfo = createStructureInfo<Floyd.MyClaims>('Floyd/MyClaims');
    export interface MyClaims {
        ID: string;
        ClaimResource?: string;
        ClaimRight?: string;
    }

    export const SaveStorageItemInfo = createStructureInfo<Floyd.SaveStorageItem>('Floyd/SaveStorageItem');
    export interface SaveStorageItem {
        Key?: string;
        Value?: string;
    }

    export const StorageInfo = createStructureInfo<Floyd.Storage>('Floyd/Storage');
    export interface Storage {
        ID: string;
        StorageKey: string;
        UserName?: string;
        Value: string;
    }

    export const StructureMetadataInfo = createStructureInfo<Floyd.StructureMetadata>('Floyd/StructureMetadata');
    export interface StructureMetadata {
        Value?: string;
    }

    export const GetStructureMetadataInfo = createStructureInfo<Floyd.GetStructureMetadata>('Floyd/GetStructureMetadata');
    export interface GetStructureMetadata {
    }

    export const GetStructureMetadataFunctionInfo = createFunctionInfo(GetStructureMetadataInfo, StructureMetadataInfo);
}

